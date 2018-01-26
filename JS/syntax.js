class SyntaxReader {
  constructor(file) {
    this.file   = file;
    this.index  = -1;
    this.length = file.content.length;
  }

  getLine(num) {
    if(this.index == -1) this.nextBlock();
    return this.file.content[(num == undefined ? this.index : num)];
  }

  getCommands(line) {
    if(this.index == -1) this.nextBlock();
    var commands = (line != undefined ? line.split(';') : this.getLine().split(';'));
        commands = commands.cleanEmptySpaces();
    return commands;
  }

  execCommands(line) {
    var commands      = this.getCommands(line);
    var commandNames  = [...commands];
    var parameters    = [...commands];

    for(var i in commands) {
      try {
        commandNames[i] = commandNames[i].split('(')[0];
        parameters[i]   = parameters[i].split('(')[1].split(')')[0].split(',');

        switch(parameters[i].length) {
          case 0: window[commandNames[i]](); break;
          case 1: window[commandNames[i]](parameters[i][0]); break;
          case 2: window[commandNames[i]](parameters[i][0], parameters[i][1]); break;
          case 3: window[commandNames[i]](parameters[i][0], parameters[i][1], parameters[i][2]); break;
          case 4: window[commandNames[i]](parameters[i][0], parameters[i][1], parameters[i][2], parameters[i][3]); break;
          case 5: window[commandNames[i]](parameters[i][0], parameters[i][1], parameters[i][2], parameters[i][3], parameters[i][4]); break;

          default: console.error('Too many parameters!');
        }

      } catch(err) {};
    }
  }

  nextBlock() {
    this.index++;
    return (this.index > this.length - 1 ? false : true);
  }

  getBlock() {

  }

}

class File {
  constructor(path) {
    this.path     = path;
    this.content  = this.openFile();
    this.content  = this.subdivide(this.content);
  }

  openFile(cleanLines = true) {
    var data;
    var rawFile = new XMLHttpRequest();
		rawFile.open("GET", this.path, false);
		rawFile.onreadystatechange = function () {
			if(rawFile.readyState === 4) {
				if(rawFile.status === 200 || rawFile.status == 0) {
					data = rawFile.responseText;
				}
			}
		}
		rawFile.send(null);

    data = this.cleanContent(data, cleanLines);

    return data;
  }

  cleanContent(content, cleanLines = true) {
    var content = content;
        content = content.replace(/\n/g, '');
        content = content.replace(/\t/g, '');
        content = content.replace(/\r/g, '');
        content = content.replace(/  /g, '');
        content = content.replace(/ /g, '');

    return content
  }

  subdivide(string, start = '{', end = '}') {
    var string  = string.split('');
    var divider = '|';
    var blocks  = '';

    for(var char of string) {
      if(char == start)
        blocks += divider;
      else if(char == end)
        blocks += divider;
      else
        blocks += char;
    }

    blocks = blocks.split(divider);
    blocks = blocks.cleanEmptySpaces();

    return blocks;
  }
}

String.prototype.startsWith = function(char) {
  return this.substr(0, char.length) == char;
}
String.prototype.endsWith = function(char) {
  return this.substr(-1, char.length) == char;
}
Array.prototype.cleanEmptySpaces = function() {
  var arr = this;
  for(var i in arr)
    if(arr[i] == '')
      arr.splice(i, 1);
  return arr;
}
