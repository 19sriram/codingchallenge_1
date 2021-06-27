import React from 'react';


class autoCorrect extends React.Component {
    words = [];
     correctionObject = {
        'realy': 'really',
        'stil': 'still'
    }
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
        this.onChange = this.onChange.bind(this);
    }
     
// Finding onchange value 
    onChange  = (e) => {
        
        this.setState({
            content: e.currentTarget.value
        });

        
        this.words = this.state.content.split(' ');
       console.log(this.words);
    }
     
        // when key down
    keyDown = (e) => {
        
        setTimeout(() => {
            if (e.keyCode == 32) {
                console.log(this.words.length);
                
                if (this.correctionObject[this.words[this.words.length - 1]] !== undefined) {
                    this.setState({
                        content: this.state.content.replace(this.words[this.words.length - 1],this.correctionObject[this.words[this.words.length - 1]]) 
                    })
                }
            }    
        }, 100);
        
    }
    render() {
        return (
            <div>
                <textarea onChange={this.onChange} value={this.state.content} onKeyDown={this.keyDown.bind(this)}/>
            </div>
        )
    }
}

export default autoCorrect;
