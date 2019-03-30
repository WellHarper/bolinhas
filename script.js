$(document).ready(function(){
    
    
    
$('.red').click(function(){
    $('.red').fadeOut();
    
    
    
    
    
});
    
$('.green').click(function(){
   $('.blue').hide(); 
    //$('.yellow').show();
    
    
});
                  
                  
$('.yellow').click(function(){
    $('.blue').show();
    $('.green').hide();
    
    
    
});                  
    
$('.blue').click(function(){
   $('.green,.yellow,.red').toggle(); 
    
    
});    
    
    
    
    
    
    
    
    
    
    
    
    
});