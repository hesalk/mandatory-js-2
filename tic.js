let TicTacToe = {
    counter : 1,


    interaction: function(e,obj){
        this.play(e,obj);
        this.validation();
    },
    
    play: function(e,obj){
        let player1 = 'X', player2 = 'O', cell = obj;
        if ( $(obj).hasClass('player1') ||  $(obj).hasClass('player2') ) {
            e.preventDefault();
            return false;
        }
        console.log(this.counter)
        if ( TicTacToe.counter % 2 === 0) {
            $(cell).html(player1).addClass('player1 selected');
        } else {
            $(cell).html(player2).addClass('player2 selected');
        }
        TicTacToe.counter++; 
        
           
    },

    validation: function(){
        let index1 = $('#tic1'),
            index2 = $('#tic2'),
            index3 = $('#tic3'),
            index4 = $('#tic4'),
            index5 = $('#tic5'),
            index6 = $('#tic6'),
            index7 = $('#tic7'),
            index8 = $('#tic8'),
            index9 = $('#tic9');
        
        if( $(index1).text() === 'X'
        &&  $(index2).text() === 'X'
        &&  $(index3).text() === 'X' ||
            $(index4).text() === 'X'
        &&  $(index5).text() === 'X'
        &&  $(index6).text() === 'X' ||
            $(index7).text() === 'X'
        &&  $(index8).text() === 'X'
        &&  $(index9).text() === 'X' ||
            $(index1).text() === 'X'
        &&  $(index4).text() === 'X'
        &&  $(index7).text() === 'X' ||
            $(index2).text() === 'X'
        &&  $(index5).text() === 'X'
        &&  $(index8).text() === 'X' ||
            $(index3).text() === 'X'
        &&  $(index6).text() === 'X'
        &&  $(index9).text() === 'X' ||
            $(index1).text() === 'X'
        &&  $(index5).text() === 'X'
        &&  $(index9).text() === 'X' ||
            $(index3).text() === 'X'
        &&  $(index5).text() === 'X'
        &&  $(index7).text() === 'X' ||
        //The other player
            $(index1).text() === 'O'
        &&  $(index2).text() === 'O'
        &&  $(index3).text() === 'O' ||
            $(index4).text() === 'O'
        &&  $(index5).text() === 'O'
        &&  $(index6).text() === 'O' ||
            $(index7).text() === 'O'
        &&  $(index8).text() === 'O'
        &&  $(index9).text() === 'O' ||
            $(index1).text() === 'O'
        &&  $(index4).text() === 'O'
        &&  $(index7).text() === 'O' ||
            $(index2).text() === 'O'
        &&  $(index5).text() === 'O'
        &&  $(index8).text() === 'O' ||
            $(index3).text() === 'O'
        &&  $(index6).text() === 'O'
        &&  $(index9).text() === 'O' ||
            $(index1).text() === 'O'
        &&  $(index5).text() === 'O'
        &&  $(index9).text() === 'O' ||
            $(index3).text() === 'O'
        &&  $(index5).text() === 'O'
        &&  $(index7).text() === 'O'
        ){
            $('.winner').fadeIn('slow');
            $('.noweinner').hide();
            $('#cont').off('click');
        }
        if($('.sqr').length === $('.sqr.selected').length) {debugger
            if( $('.winner').is(':hidden') ) {
                console.log('test')
                $('.nowinner').fadeIn('slow');
                return false;
            }
        }
    }

};
$(function(){
    $('#cont').on('click','.sqr', function(e){
        console.log(this)
        let obj = $(this);
        TicTacToe.interaction(e,obj);
    });

    $('p.restart').on('click', function (e){
        e.preventDefault();
        $('#cont').find('.sqr.selected').text('');
        $('#cont').find('.sqr')
            .removeClass('selected')
            .removeClass('player1')
            .removeClass('player2');
        $('.winner').fadeOut('slow');
        $('.nowinner').fadeOut('slow');
        $('#cont').on('click','.sqr', function(e){
            let obj = $(this);
            TicTacToe.interaction(e,obj);
        });
    });

});