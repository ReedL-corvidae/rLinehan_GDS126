var x=false;
var caveData ={
	info:{
		layout:[
			[13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,7],
			[13,16,16,17,17,16,18,16,17,17,16,17,17,17,17,16,16,16,17,16,16,18,16,17,16,18,16,17,16,16,16,17,16,16,7],
			[13,x,x,13,14,14,15,x,x,x,x,x,13,14,15,x,x,x,x,x,x,x,x,13,14,14,14,15,x,x,x,x,x,x,7],
			[13,x,x,x,x,x,16,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,17,18,x,x,7],
			[10,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7],
			[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,14,8,8,8,8]
			
			
		],
		src:`images/TileArt.png`,
	},
	states:
	[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:32, height:32, startX:0, startY:0}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:32, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:64, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:96, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:128, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:160, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:192, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:224, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:256, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:288, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:320, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:32, startY:32}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:64, startY:32}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:96, startY:32}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:128, startY:32}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:160, startY:32}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:192, startY:32}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:224, startY:32}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:256, startY:32}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:288, startY:32}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:320, startY:32}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:32, height:32, startX:352, startY:32}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,7,8,8,8,8],
			[x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,8,8,8,8],
			[x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,8,8,8,8],
			[10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,8,8,8,8],
			[x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,8,8,8,8],
			[x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,8,8,8,8],
			[x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,8,8,8,8],
			],
			src:`images/TileArt.png`,
		},
		states:caveData.states
		}

		var caveHitData={
			info:{
				layout:[
					[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
					[2,8,1,8,1,1,8,1,1,1,1,1,1,8,8,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
					[2,x,x,13,14,14,15,x,x,x,x,x,x,13,14,15,x,x,x,x,x,x,x,13,14,14,14,15,x,x,x,x,x,x,2],
					[6,x,x,x,x,x,16,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,17,18,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2]
					
					
				],
				src:`images/TileArt.png`,
			},
			states:caveData.states
			
			}