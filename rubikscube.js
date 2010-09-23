var Matrix = function(elements) {
	this.elements = elements;
};
Matrix.prototype = {
	setElements: function(elements) {
		this.elements = elements;
	},
	e: function(y,x) {
		return this.elements[y][x];
	},
	getCol: function(x) {
		var col = [];
		for(var i=0;i<this.elements.length;i++) {
			col.push(this.elements[i][x]);
		}
		return col;
	},
	setRow: function(y,elm) {
		this.elements[y] = elm;
	},
	getRow: function(y) {
		return this.elements[y];
	},
	setCol: function(x,elm) {
		for(var i=0;i<this.elements.length;i++) {
			this.elements[i][x] = elm[i];
		}
	}
};

var tileWidth = 51;
var tileHeight = 89;

var Cube = function(faces) {
	this.faces = faces;
	this.short = { 'l': 'left',	'r': 'right',	'u': 'up', 'd': 'down',	'f': 'front',	'b': 'back'	};
	this.turns = {
		'front': ['lc2', 'dr2', 'rc2', 'ur2'],
		'right': ['fc2', 'dc2', 'bc2', 'uc2'],
		'back': ['rc0', 'dr0', 'lc0', 'ur0'],
		'left': ['bc0', 'dc0', 'fc0', 'uc0'],
		'up': ['lr0', 'br0', 'rr0', 'fr0'],
		'down': ['lr2', 'br2', 'rr2', 'fr2'],
	};
};

/*
 * http://peter.stillhq.com/jasmine/rubikscubesolution.html
 */
Cube.prototype = {
	html: function() {
		var html = '<div id="cube" class="cube">';
		for(var face in this.faces) {
			var s_face = face.toString();
			html += '<div class="fc '+s_face[0]+'">';

			for(var y=0;y<3;y++) {
				for(var x=0;x<3;x++) {
					html += '<div class="c '+this.faces[face].e(y,x)+'" style="';
		
					var sL = 0;
					var sT = 0;
					switch(s_face) {
						case "right":
							sL = 90;
							sT = -85;
							break;
						case "down":
							sL = -95;
							sT = 95;
							break;
						case "front":
							sL = 85;
							sT = 90;
							break;
						case "back":
							sL = -5;
							sT = -5;
							break;
						case "left":
							sL = -5;
							sT = 10;
							break;
						default:
							break;
					}
		
					html += 'top:'+(sT+y*28)+'px;';
					html += 'left:'+(sL+x*28)+'px;';
					html += '"></div>';
				}
			}

			html += "</div>";
		}
		html += '</div>';
		return html;
	},
	turn: function(face, turns) {
		
		var actions = this.turns[face];
		for(var j=0; j<Math.abs(turns);j++) {
			if(turns < 0) {
				var dup = this.get(actions[actions.length-1]);
				for(var i=actions.length-1;i>=0;i--) {
					this.set(actions[i], (i-1>=0) ? this.get(actions[i-1]) : dup);
				}

				// TODO: Needs a cleanup 
				var dup = this.faces[face].getCol(2);
				this.faces[face].setCol(2,this.faces[face].getRow(2));
				this.faces[face].setRow(2,this.faces[face].getCol(0));
				this.faces[face].setCol(0,this.faces[face].getRow(0).reverse());
				this.faces[face].setRow(0,dup);
				
			} else {
				var dup = this.get(actions[0]);
				for(var i=0;i<actions.length;i++) {
					this.set(actions[i], (i+1<actions.length) ? this.get(actions[i+1]) : dup);
				}
				
				// TODO: Needs a cleanup 
				var dup = this.faces[face].getRow(0);
				this.faces[face].setRow(0,this.faces[face].getCol(0).reverse());
				this.faces[face].setCol(0,this.faces[face].getRow(2));
				this.faces[face].setRow(2,this.faces[face].getCol(2).reverse());
				this.faces[face].setCol(2,dup);
				
			}
		}
	},
	get: function(command) {
		var cmd = {
			'c': 'getCol',
			'r': 'getRow'
		};
		return this.faces[this.short[command[0]]][cmd[command[1]]](command[2]);
	}	,			
	set: function(command,elm) {
		var cmd = {
			'c': 'setCol',
			'r': 'setRow'
		};
		return this.faces[this.short[command[0]]][cmd[command[1]]](command[2],elm);
	}
};

