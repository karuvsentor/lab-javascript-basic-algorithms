// Iteration 1: Names and Input

title = 'ITERATION 1: Names and Input\n'

hacker1 ='Jorge';
hacker2 ='Carlos';

let driver = `The driver´s name is `+ hacker1 + '\n';
let navigator = `The navigator´s name is `+ hacker2 + '\n\n';

console.log(title);
console.log(driver);
console.log(navigator);

// Iteration 2: Conditionals

title2 = 'ITERATION 2: Conditionals\n'              //Título de la iteración 2

console.log(title2);                                //Título de la iteración 2

if (hacker1.length > hacker2.length){               //Condición 1
  let text1 = `The driver has the longest name,  it has ${hacker1.length} characters.\n\n`;
  console.log(text1);
} 
else if (hacker1.length < hacker2.length){          //Condición 2

  let text2 =` It seems that the navigator has the longest name, it has ` + hacker2.length + ` characters.\n\n`;
  console.log(text2);
}
else if(hacker1.length === hacker2.length){         //Condición 3

  let text3 = `Wow, you both have equally long names, ${hacker1.length} characters!\n\n`;
  console.log(text3);
}

// Iteration 3: Loops

title3 = 'ITERATION 3: Loops \n'                    //Título de la iteración 3

subtitle1 = '3.1 \n'
subtitle2 = '3.2 \n'
subtitle3 = '3.3 \n'

console.log(title3);                                //Título de la iteración 3
console.log(subtitle1);                             //Subtítulo de la iteración 3.1


letras = '';
for (i = 0; i<hacker1.length;i++){
    letras += hacker1[i] + ' ';

} 
letras = letras.toUpperCase();
console.log(letras + '\n');

console.log(subtitle2);                             //Subtítulo de la iteración 3.2

inverso = '';
for (i = 0; i<hacker2.length;i++){
    inverso = hacker2[i] + inverso;
} 
console.log(inverso + '\n');

console.log(subtitle3);                             //Subtítulo de la iteración 3.3

if (hacker1.localeCompare(hacker2) > hacker2.localeCompare(hacker1)){           //Condición 1
  let text4 = "The driver`s name goes first.\n" 
  console.log(text4);
  }
  else if (hacker2.localeCompare(hacker1) > hacker1.localeCompare(hacker2)){    //Condición 2
  let text5 = "I, the navigator goes first defininely.'\n'" 
  console.log(text5);
  
  }
  else if (hacker1.localeCompare(hacker2) === hacker2.localeCompare(hacker1)){  //Condición 3 
  let text6 = "What?! You both have the same name?.'\n'"
    console.log(text6);
  }


//Bonus Time!!!

title4 = 'BONUS TIME!!!\n'
console.log(title4);

//Bonus 1

title5 = 'Bonus 1\n'
console.log(title5);

//bonus 1.1

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus orci, cursus id massa quis, ullamcorper accumsan elit. Nulla in diam luctus ipsum ullamcorper bibendum quis non augue. Cras non mi nunc. Morbi lacinia ullamcorper ante, ut pretium augue semper nec. Integer purus quam, volutpat faucibus bibendum non, egestas at lectus. Integer varius facilisis velit, quis tincidunt lorem hendrerit eget. Maecenas aliquet, sem at pharetra commodo, eros odio consectetur sem, facilisis feugiat ipsum libero vitae nibh\nCurabitur a magna dictum, commodo risus at, scelerisque sapien. Donec vitae euismod massa, vitae feugiat arcu. Donec diam elit, fringilla vel tristique in, pharetra non ipsum. Suspendisse sed dolor pellentesque, luctus ante et, rutrum enim. Maecenas feugiat vitae nisl vitae auctor. Vestibulum eu faucibus velit. Phasellus a tristique metus. Nunc vitae erat vel leo ultrices venenatis a ut mi. Maecenas sagittis augue eu turpis sodales, dignissim cursus nisi tristique. Nunc scelerisque tempor libero id tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget venenatis quam. Curabitur pulvinar commodo dui, sed vulputate odio mattis non. Aenean cursus volutpat convallis. Vivamus fringilla sagittis neque, ut gravida ante varius et. Mauris luctus quam velit, eget porttitor nisl suscipit sollicitudin.\nVestibulum ornare dui sed lorem vestibulum, eget tempus elit elementum. Quisque varius, lacus eget egestas porta, nulla ligula tristique lorem, ac sodales erat tellus ut mauris. Vestibulum viverra mattis mauris ut finibus. Donec lacinia luctus odio, ut egestas magna tempus id. Vivamus porta, massa ut bibendum convallis, sapien tortor pellentesque ipsum, in pulvinar risus dui sed lectus. Phasellus metus lorem, tempor eu suscipit ac, lobortis sed lorem. Quisque dui velit, hendrerit ac dictum tristique, aliquam vitae lectus."
//bonus 1.2 He hecho una función, esta feo, pero el resultado es OK

function WordCount() { 
  return lorem.split(" ").length;
}

console.log(WordCount("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus orci, cursus id massa quis, ullamcorper accumsan elit. Nulla in diam luctus ipsum ullamcorper bibendum quis non augue. Cras non mi nunc. Morbi lacinia ullamcorper ante, ut pretium augue semper nec. Integer purus quam, volutpat faucibus bibendum non, egestas at lectus. Integer varius facilisis velit, quis tincidunt lorem hendrerit eget. Maecenas aliquet, sem at pharetra commodo, eros odio consectetur sem, facilisis feugiat ipsum libero vitae nibh\nCurabitur a magna dictum, commodo risus at, scelerisque sapien. Donec vitae euismod massa, vitae feugiat arcu. Donec diam elit, fringilla vel tristique in, pharetra non ipsum. Suspendisse sed dolor pellentesque, luctus ante et, rutrum enim. Maecenas feugiat vitae nisl vitae auctor. Vestibulum eu faucibus velit. Phasellus a tristique metus. Nunc vitae erat vel leo ultrices venenatis a ut mi. Maecenas sagittis augue eu turpis sodales, dignissim cursus nisi tristique. Nunc scelerisque tempor libero id tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget venenatis quam. Curabitur pulvinar commodo dui, sed vulputate odio mattis non. Aenean cursus volutpat convallis. Vivamus fringilla sagittis neque, ut gravida ante varius et. Mauris luctus quam velit, eget porttitor nisl suscipit sollicitudin.\nVestibulum ornare dui sed lorem vestibulum, eget tempus elit elementum. Quisque varius, lacus eget egestas porta, nulla ligula tristique lorem, ac sodales erat tellus ut mauris. Vestibulum viverra mattis mauris ut finibus. Donec lacinia luctus odio, ut egestas magna tempus id. Vivamus porta, massa ut bibendum convallis, sapien tortor pellentesque ipsum, in pulvinar risus dui sed lectus. Phasellus metus lorem, tempor eu suscipit ac, lobortis sed lorem. Quisque dui velit, hendrerit ac dictum tristique, aliquam vitae lectus."));


//bonus 1.3 función para que cuente las veces que aparece et en la variable lorem
function countWord (sentence, character){
  let count= 0;
  const words = sentence.split(' ')
  for (var i = 0; i < words.length; i++){
    if (words[i].includes(character)) {
      count++;}
    }
  return count
  }
countWord (lorem, 'et');