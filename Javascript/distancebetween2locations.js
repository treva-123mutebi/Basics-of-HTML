function getdistance(){
			var x = (0.3197688 - 0.045108) * Math.PI / 180;
			var y = (32.5944912 -  32.4426736) * Math.PI / 180;	
			var a = Math.sin(x/2) * Math.sin(x/2) + Math.sin(y/2) * Math.sin(y/2) * Math.cos(0.045108 * Math.PI / 180) * Math.cos(0.3197688 * Math.PI / 180);
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var distance = 6371 * c;	
			document.getElementById('distance').innerText = Math.round(distance);			
        }