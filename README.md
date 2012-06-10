# Rubic's Cube

First stab at a JavaScript implementation of a Rubik's Cube.

No Flash or Java applets were killed during building, oh wait. They were!

# Demo

See [http://www.degrunt.net/media/2010/09/24/rubikscube/](http://www.degrunt.net/media/2010/09/24/rubikscube/)

# Usage

The below example depends on jQuery, but the library is completely stand-alone.

		var rubiks = new Cube({
			'back':  new Matrix([['w','w','w'],['w','w','w'],['w','w','w']]),
			'right': new Matrix([['g','g','g'],['g','g','g'],['g','g','g']]),
			'up':    new Matrix([['o','o','o'],['o','o','o'],['o','o','o']]),
			'down':  new Matrix([['r','r','r'],['r','r','r'],['r','r','r']]),
			'left':  new Matrix([['y','y','y'],['y','y','y'],['y','y','y']]),
			'front': new Matrix([['b','b','b'],['b','b','b'],['b','b','b']])
		});

		$(window).load(function(){
			$('#cube').replaceWith(rubiks.html());
			rubiks.move('f2,l1');
			$('#cube').replaceWith(rubiks.html());
		});

## rubikscube-javascript

barcode is licensed under MIT license.

	Copyright (C) 2012 Tom de Grunt <tom@degrunt.nl>

	Permission is hereby granted, free of charge, to any person obtaining a copy of
	this software and associated documentation files (the "Software"), to deal in
	the Software without restriction, including without limitation the rights to
	use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
	of the Software, and to permit persons to whom the Software is furnished to do
	so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.