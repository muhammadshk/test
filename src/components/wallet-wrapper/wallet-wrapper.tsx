import {Component, h, State, Method} from '@stencil/core';

@Component({
    tag: 'wallet-wrapper',
    styleUrl: 'wallet-wrapper.css',
    shadow: true,
})

export class WalletWrapper {

    @State() funds: number = 0;

    @Method() 
    async deposit(){
        this.funds=10
        console.log(this.funds)
    }
    async withdraw(){
        this.funds-=1
    }

    render() {
        return(
            [   
                <div class='container'>
                    <display-funds funds={this.funds}></display-funds>
                    <test-wallet earn={this.deposit} spend={this.withdraw}></test-wallet>
                </div>
            ]
        )
    }
}
