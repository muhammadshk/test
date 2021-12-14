import {Component, h, Prop} from '@stencil/core';

@Component({
    tag: 'test-wallet',
    styleUrl: 'test-wallet.css',
    shadow: true,
})

export class Wallet {
    @Prop() earn: Function;
    @Prop() spend: Function;

    render() {
        return(
            [
                <button onClick={()=>this.earn()} class='container'>Earn</button>,
                <button onClick={()=>this.spend()} class='spend'>Spend</button>
            ]
        )
    }
}