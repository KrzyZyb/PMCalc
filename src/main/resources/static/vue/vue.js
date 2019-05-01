var calculator = new Vue({
    el: '#calculator',
    data: {
        cena: 0.00,
        szt: 0.00,
    },
    computed: {
        razem: function(e){
            var c = this.cena;
            var s = this.szt;
            var brutto = Round((c*s));
            return brutto;
        },
        refundacja: function(e){
            var c = this.cena;
            var s = this.szt;
            var kosztBrutto = c*s;
            var wysokoscRefundacji = Round((kosztBrutto*0.7));
            if(kosztBrutto>90){
                return 63.00;
            }
            else{
                return wysokoscRefundacji;
            }
        },
        doplata: function(e){
            var c = this.cena;
            var s = this.szt;
            var r = this.refundacja
            var kosztBrutto = c*s;
            var doplataRazem = Round((kosztBrutto-r));
            return doplataRazem;
        }
    }
});

function Round(n, k)
{
    var factor = Math.pow(10, 2);
    return Math.round(n*factor)/factor;
}
