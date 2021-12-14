import {Component, h, Prop} from '@stencil/core';

@Component({
    tag: 'display-funds',
    styleUrl: 'display-funds.css',
    shadow: true,
})

export class DisplayFunds {
    @Prop() funds: number;

    
    componentWillLoad(){
        console.log('this loaded')
    }

    render() {
        return(
            <div class='container'>Your total Funds: {this.funds}</div>
        )
    }
}