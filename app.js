var users = [
    {
        name:'Lucy',
        gender:'F',
        hobby: 'pets',
        avatar:'1.jpg'
    },
    {
        name:'Pepe',
        gender:'M',
        hobby: 'singe',
        avatar:'2.jpg'
    },
    {
        name:'Maria',
        gender:'F',
        hobby: 'read',
        avatar:'3.jpg'
    },
    {
        name:'Sam',
        gender:'M',
        hobby: 'pets',
        avatar:'4.jpg'
    },
    {
        name:'Luna',
        gender:'F',
        hobby: 'pets',
        avatar:'5.jpg'
    },
    {
        name:'Ramiro',
        gender:'M',
        hobby: 'singe',
        avatar:'6.jpg'
    },
    {
        name:'Minde',
        gender:'F',
        hobby: 'read',
        avatar:'7.jpg'
    },
    {
        name:'Rocsan',
        gender:'F',
        hobby: 'pets',
        avatar:'8.jpg'
    },
    {
        name:'Samara',
        gender:'F',
        hobby: 'pets',
        avatar:'9.jpg'
    },
    {
        name:'Luis',
        gender:'M',
        hobby: 'read',
        avatar:'10.jpg'
    },

]

window.addEventListener('load', function(){

    function search(){
        
        //get hobby
        var hobbyField= document.getElementById('hobby');
        var hobby = hobbyField.value;
        console.log(hobby);
        //get gender
        var genderField= document.getElementById('gender');
        var selected= genderField.selectedIndex;
        var gender = genderField.options[selected].value;

        var resultsHTML= '';
        var numUsers= users.length;
        
        for(var i=0; i< numUsers; i++){
            if(gender == 'A' || gender == users[i].gender){
                if(hobby=='' || hobby == users[i].hobby){            

                 resultsHTML+= '<div class="person-row">\
                <img src="avatrs/'+ users[i].avatar + '" width="80px" height="80px"/>\
                <div class="person-info">\
                    <div>'+ users[i].name +'</div>\
                    <div>'+ users[i].hobby +'</div></div>\
                <button> Add Friend</button></div>';
                }
            }
            
        }
        results.innerHTML= resultsHTML;

        console.log(gender);
    }

    var results= document.getElementById('results');
    var searchBtn= document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);
}
);