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
       
    }
     
        // when key down
    keyDown = (e) => {
        
        if (e.keyCode == 32) {
            console.log(this.words[this.words.length-1]);
          console.log(this.correctionObject['realy'])
        }
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
