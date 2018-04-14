//import

//body styles

//

class MainWindow {
    constructor(window){
        //Private Variables
        this.window = window;
        this.body = window.document.body;

        //default style for initial window
        this.stylize.bind(this.window)();
        this.div.bind(this.window)();
        this.window.addEventListener('resize', (event, bounds) => {
            var rootDiv = this.window.document.getElementById('root')
            rootDiv.style.height = this.window.innerHeight;
        })
    }
    stylize(){
        //docunment.body
        this.document.body.style.overflow = 'hidden';
        this.document.body.style.margin = '0px';
    }
    div(){
        //init root and console
        var rootDiv = this.document.createElement('div');
        rootDiv.id = 'root'
        rootDiv.style.height = this.innerHeight;
        rootDiv.style.backgroundColor = 'black';

        this.document.body.appendChild(rootDiv);
    }
}

module.exports = MainWindow