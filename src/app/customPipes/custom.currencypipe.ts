import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency,getCurrencySymbol } from '@angular/common';

@Pipe({
    name: 'tlcurrency'
})

export class TlCurrencyPipe implements PipeTransform {
    transform(
        value:number,
        currencyCode:string="TL",
        display:
            | 'code'
            | 'symbol'
            | 'symbol-narrow'
            | string
            | boolean ='symbol',
        digitsInfo:string='3.2-2',
        locale:string='tr',
    ): string | null {
        return formatCurrency(
            value,
            locale,
            getCurrencySymbol(currencyCode,'wide'),
            currencyCode,
            digitsInfo,
        );
        
    }
}
