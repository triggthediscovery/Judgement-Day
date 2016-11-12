var WKey=false, SKey=false, AKey=false, DKey=false, EKey=false, QKey=false, ZKey=false, XKey=false,
        CKey=false, RKey=false, FKey=false, UKey=false, DoKey=false, LKey=false, RiKey=false, SpKey=false,
        VKey=false, BKey=false;
var WKeyp, SKeyp, AKeyp, DKeyp, EKeyp, QKeyp, ZKeyp, CKeyp, RiKeyp, FKeyp, UKeyp, DoKeyp, LKeyp, RKryp, SpKeyp, XKeyp,
        VKeyp, BKeyp,
        LMouse=false, RMouse=false, LMousep=false, RMousep=false;
var mouse_x=0, mouse_y=0, mouse_xp=0, mouse_yp=0;
var scrollx=0, scrolly=0, cursor_x=4000, cursor_y=150;

Bodr = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
		
Walk = [[49.085623573178474,0,15.048251579035906,305.3503984336733,287.13278418047065,32.27092402097972,337.0152103685728,67.82774416277661,16.25235564498037,339.3365683490782],[10.420725609710374,0,4.54371116973374,311.8196989889227,261.3061656514885,52.29827743982462,282.68144877409196,88.39303482605861,5.099220402935856,343.6989410184251],[341.14682942274294,0,18.743040703450703,336.1517361270366,230.97870867239564,17.747618597828648,257.4613350230126,50.04690384035916,27.046216556767313,343.6989410184251],[299.7448763582625,337.3569291774845,359.99417122872194,352.5051941216763,242.35100781844233,354.4451635979947,252.99731752864946,0.951037056544564,34.033658400958444,335.48701510314766],[316.888180221679,337.3569291774845,351.554509957758,281.4124212326086,278.19378945664346,4.613725961532197,306.612999139287,66.60806236716402,25.176361723295017,310.7195976132904],[341.5650392948027,347.4241589113369,0.4066586084253885,275.42732535012976,297.2077109095411,30.24271808646222,315.2497579488629,52.377593699206265,5.5284120352322645,285.0261056095034],[18.43496070519727,3.4106502689292597,328.57010454196495,302.2931968847638,297.2077109095411,30.24271808646222,315.2497579488629,51.88539856253987,353.1110647604417,316.2445168085977],[49.085623573178474,0,15.048251579035906,305.3503984336733,287.13278418047065,32.27092402097972,337.0152103685728,67.82774416277661,16.25235564498037,339.3365683490782],[49.085623573178474,0,15.048251579035906,305.3503984336733,287.13278418047065,32.27092402097972,337.0152103685728,67.82774416277661,16.25235564498037,339.3365683490782],[0,0,0,0,0,0,0,0,0,0]];

Walky = [0,-8,-7,-4,7,-23,-29,0,0,0];

Bears =[[[0,0,312,222,280,36,78,297,25,316],[6,0,300,222,274,29,71,297,25,316],[10,0,282,222,267,14,58,284,26,321],[6,0,300,222,274,29,71,297,25,316],[0,0,312,222,280,36,78,297,25,316],[0,0,312,222,280,36,78,297,25,316],[0,0,0,0,0,0,0,0,0,0]],
		[[0,0,312,222,280,36,78,297,25,316],[357,349,272,183,283,39,71,288,28,304],[350,340,235,148,290,50,71,288,37,297],[341,329,204,98,297,53,71,283,55,297],[16,341,238,157,288,53,60,269,55,297],[33,2,303,227,287,54,56,270,55,297],[33,15,328,304,279,49,71,293,55,297],[0,0,312,222,280,36,78,297,25,316],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],
		[[0,0,312,222,280,36,78,297,25,316],[355,352,309,222,280,43,76,297,25,316],[354,348,309,222,284,48,76,297,25,316],[347,348,271,173,284,48,76,297,358,283],[339,348,244,145,284,48,76,297,301,191],[329,348,207,93,284,48,76,297,253,143],[318,348,223,89,284,48,76,297,252,109],[297,348,283,147,284,48,76,297,252,109],[268,348,273,102,284,80,95,300,278,109],[0,0,0,0,0,0,0,0,0,0]],
		[[94,354,305,332,323,0,0,26,348,0],[94,354,309,6,327,20,331,53,316,30],[94,354,322,39,351,33,318,28,311,336],[94,354,322,83,13,66,318,352,318,342],[94,354,297,63,355,66,333,21,333,9],[94,354,297,357,331,38,6,21,352,9],[94,354,305,332,323,0,0,26,348,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]];

Dear = [[[82,0,0,0,11,317,18,342,0,0],[82,0,-23,1,-1,317,1,342,-20,4],[82,0,0,0,11,317,18,342,0,0],[82,0,-23,1,-1,317,1,342,-20,4],[82,0,0,0,11,317,18,342,0,0],[82,0,337,1,359,317,1,342,340,4]],
		[[80,359,0,0,21,0,11,347,0,0],[80,359,0,0,21,0,11,347,0,0],[80,359,351,27,358,328,11,347,0,0],[80,359,331,23,343,315,16,347,0,22],[80,359,324,352,339,315,25,334,0,24],[77,359,338,352,354,315,4,311,350,49],[76,359,344,9,14,315,4,291,323,25],[75,359,350,9,14,334,4,311,336,11],[80,359,0,0,21,0,11,347,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]];
 
		
Bearx = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,37,54,46,0,0,0],[0,0,0,-8,-19,-33,-46,-67,-67,0],[0,0,0,0,0,0,0,0,0,0]];
Beary = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0, 0, 4, 5,0,0,0],[0,0,0, 0,  3,  9, 17, 42,103,0],[0,0,0,0,0,0,0,0,0,0]];
		
ax = [0,0,0,0,0,0,0,0,0,0];
ay = [0,0,0,0,0,0,0,0,0,0];

anix = [300,300,300,300,300,300,300,300,300,300];
aniy = [150,150,150,150,150,150,150,150,150,150];

anibuf = [0,0,0,0,0,0,0,0,0,0,0,0];

var run=false;

var px=0, py=0, charx=4000, chary=150, scrollx=0, scrolly=0;

function MainControl() {
	
	if (canmove && LMousep) {
		if (mouse_y<225) {mouse_y=230;}
		
		cursor_y=scrolly+(20000/(mouse_y-226))
		scalesd=(100/(cursor_y-scrolly));
		cursor_x=((mouse_x-400)/scalesd)+400+scrollx;
	}
	
	if (!canmove) {
		var x=10;
	}
	
	var diff=(charx-cursor_x)/20;
	
	if (Math.abs(diff)>5) {
		diff = 5 * ((Math.abs(diff))/(diff));
	}
	
	px=-diff;
	
	diff=(chary-cursor_y)/20;
	
	if (Math.abs(diff)>5) {
		diff = 5 * ((Math.abs(diff))/(diff));
	}
	
	py=-diff;
	
	if (px>5) {px=5;}
	if (px<-5) {px=-5;}
	
	if (py>5) {py=5;}
	if (py<-5) {py=-5;}
	
	if (XKey==true && XKeyp==false) {
		if (invopen==true) {
			invopen=false;
		} else {
			invopen=true;
		}
	}
	
	/*
	if (AKey) {scrollx-=1;}
	if (DKey) {scrollx+=1;}
	if (WKey) {scrolly-=1;}
	if (SKey) {scrolly+=1;}
	*/
}

var selt=0;

function CheckClick(x,y,radius,pass){
	if ((LMouse==true && LMousep==false)) {
		if (((Math.abs(mouse_x-x)+Math.abs(mouse_y-y))<radius)) {
			if (((Math.abs(csx-x)+Math.abs(csy-y))<300) || pass) {
				canmove=false;
				
				return true;
			}
		}
	}
	
	return false;
}
function CheckClickB(x,y,y2,radius,pass){
	if ((LMouse==true && LMousep==false)) {
		if (((Math.abs(mouse_x-x)+Math.abs(mouse_y-y))<radius)) {
			if ((Math.abs(y2-chary)<300) || pass) {
				canmove=false;
				
				return true;
			}
		}
	}
	
	return false;
}

function Inventory() {
	if (invopen) {
		invplace-=5;
	} else {
		invplace+=5;
	}
	
	if (invplace>180) {
		invplace=180;
	}
	
	if (invplace<0) {
		invplace=0;
	}
	
	if (CheckClick((Math.cos(invplace/57.29577)*300)+315+32,81+32,32,true)) {
		if (invopen==true) {
			invopen=false;
		} else {
			invopen=true;
		}
	} else {
		if (LMouse && !LMousep) {
			ItemSel=-1;
		}
	}
	
	DrawInvent((Math.cos(invplace/57.29577)*300)+75,225,.5);
	if (InInv[0]) {
		context.drawImage(axe,(Math.cos(invplace/57.29577)*300)-150,81,64,64);
		if (CheckClick((Math.cos(invplace/57.29577)*300)-150+32,81+32,32,true)) {
			ItemSel=0;
		}
	}
	if (InInv[1]) {
		context.drawImage(flower,(Math.cos(invplace/57.29577)*300)-80,81,64,64);
		if (CheckClick((Math.cos(invplace/57.29577)*300)-80+32,81+32,32,true)) {
			ItemSel=1;
		}
	}
	if (InInv[2]) {
		context.drawImage(blueberries,(Math.cos(invplace/57.29577)*300)-22,81,64,64);
		if (CheckClick((Math.cos(invplace/57.29577)*300)-22+32,81+32,32,true)) {
			ItemSel=2;
		}
	}
	if (InInv[3]) {
		context.drawImage(gun,(Math.cos(invplace/57.29577)*300)-150,121,64,64);
		if (CheckClick((Math.cos(invplace/57.29577)*300)-150+32,121+32,32,true)) {
			ItemSel=3;
		}
	}
	if (InInv[4]) {
		context.drawImage(shovel,(Math.cos(invplace/57.29577)*300)-80,121,64,64);
		if (CheckClick((Math.cos(invplace/57.29577)*300)-80+32,121+32,32,true)) {
			ItemSel=4;
		}
	}
	if (InInv[5]) {
		context.drawImage(rock,(Math.cos(invplace/57.29577)*300)-22,121,64,64);
		if (CheckClick((Math.cos(invplace/57.29577)*300)-22+32,121+32,32,true)) {
			ItemSel=5;
		}
	}
	if (InInv[6]) {
		context.drawImage(key,(Math.cos(invplace/57.29577)*300)-150,161,64,64);
		if (CheckClick((Math.cos(invplace/57.29577)*300)-150+32,161+32,32,true)) {
			ItemSel=6;
		}
	}
	
	context.drawImage(inventory,(Math.cos(invplace/57.29577)*300)+315,81,64,64);
	
	ItemSelect();
	
	
}

function KeyDown() {
    if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
    
    var Pressedkey = String.fromCharCode(event.keyCode);

    if (Pressedkey == "W") {
        WKey = true;
    }
    if (Pressedkey == "S") {
        SKey = true;
    }
    if (Pressedkey == "A") {
        AKey = true;
        dir = true;
    }
    if (Pressedkey == "D") {
        DKey = true;
        dir = false;
    }
    if (Pressedkey == "E") {
        EKey = true;
    }
    if (Pressedkey == "Q") {
        QKey = true;
    }
    if (Pressedkey == "Z") {
        ZKey = true;
    }
    if (Pressedkey == "X") {
        XKey = true;
    }
    if (Pressedkey == "C") {
        CKey = true;
    }
    if (Pressedkey == "R") {
        RKey = true;
    }
    if (Pressedkey == "F") {
        FKey = true;
    }
    if (Pressedkey == "V") {
        VKey = true;
    }
    if (Pressedkey == "B") {
        BKey = true;
    }
    if (event.keyCode == "38") {
        UKey = true;
    }
    if (event.keyCode == "40") {
        DoKey = true;
    }
    if (event.keyCode == "37") {
        LKey = true;
    }
    if (event.keyCode == "39") {
        RiKey = true;
    }
    if (event.keyCode == "17") {
        SpKey = true;
    }
}
function KeyUp() {
    var Pressedkey = String.fromCharCode(event.keyCode);

    if (Pressedkey == "W") {
        WKey = false;
    }
    if (Pressedkey == "S") {
        SKey = false;
    }
    if (Pressedkey == "A") {
        AKey = false;
    }
    if (Pressedkey == "D") {
        DKey = false;
    }
    if (Pressedkey == "E") {
        EKey = false;
    }
    if (Pressedkey == "Q") {
        QKey = false;
    }
    if (Pressedkey == "Z") {
        ZKey = false;
    }
    if (Pressedkey == "X") {
        XKey = false;
    }
    if (Pressedkey == "C") {
        CKey = false;
    }
    if (Pressedkey == "R") {
        RKey = false;
    }
    if (Pressedkey == "F") {
        FKey = false;
    }
    if (Pressedkey == "V") {
        VKey = false;
    }
    if (Pressedkey == "B") {
        BKey = false;
    }
    if (event.keyCode == "38") {
        UKey = false;
    }
    if (event.keyCode == "40") {
        DoKey = false;
    }
    if (event.keyCode == "37") {
        LKey = false;
    }
    if (event.keyCode == "39") {
        RiKey = false;
    }
    if (event.keyCode == "17") {
        SpKey = false;
    }
}
function KeyPrev() {
    WKeyp = WKey;
    AKeyp = AKey;
    SKeyp = SKey;
    DKeyp = DKey;
    QKeyp = QKey;
    EKeyp = EKey;
    ZKeyp = ZKey;
    XKeyp = XKey;
    CKeyp = CKey;
    RKeyp = RKey;
    FKeyp = FKey;
    UKeyp = UKey;
    VKeyp = VKey;
    BKeyp = BKey;
    SpKeyp = SpKey;
}
function MouseMove(event) {
    mouse_x = event.clientX - 8;
    mouse_y = event.clientY - 8;
}
function MouseDown(event) {
    if (event.button == 0) {
        LMouse = true;
    }
    if (event.button == 2) {
        RMouse = true;
    }
}
function MouseUp(event) {
    if (event.button == 0) {
        LMouse = false;
    }
    if (event.button == 2) {
        RMouse = false;
    }
}
function MousePrev() {
    RMousep = RMouse;
    LMousep = LMouse;
    mouse_xp = mouse_x;
    mouse_yp = mouse_y;
}
function MouseWheelHandler(event) {
    
    if (pause==true) {return;}
    
    var olzoom = zoom;
    
    var dats=event.wheelDelta;
    
    dats=dats*zoom*2;

    zoom += (dats) / 2000;

    var fixx, fixy, ch;

    fixx = ((mouse_x + scrollx) / olzoom);
    fixy = ((mouse_y + scrolly) / olzoom);
    ch = Math.abs((dats) / 2000);

    if (event.wheelDelta > 0) {
        scrollx += fixx * ch;
    } else {
        scrollx -= fixx * ch;
    }
    if (event.wheelDelta > 0) {
        scrolly += fixy * ch;
    } else {
        scrolly -= fixy * ch;
    }

    return false;
}
