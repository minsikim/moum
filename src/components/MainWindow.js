//import

//body styles

//

class Mainwindow {
    constructor(window){
        //Private Variables
        this.window = window;
        this.body = window.document.body;

        //default style for initial window
        stylize().bind(this.window);
        div().bind(this.window);
        this.on('resize', onResize())
    }
    stylize(){
        //docunment.body
        this.body.style.overflow = 'hidden';
        this.body.style.margin = '0px';
    }
    div(){
        //init root and console
        var rootDiv = this.document.createElement('div');
        rootDiv.style.height = this.innerHeight;
        rootDiv.style.backgroundColor = 'black';

        this.body.appendChild()
    }
}