Rubic's Cube
------------

First stab at a JavaScript implementation of a Rubik's Cube.

No Flash or Java applets were killed during building, oh wait. They were!

Usage
-----

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