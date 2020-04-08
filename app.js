// Javascript app running the code for the påskerebus 2020

// Define variables
var chapterNumber = 0; // The stage of the rebus
var questionHasChanged = 0; // Used for resetting the questionText if it has been changed during a chapter
var answerGiven = ''; // Answer given by user
const mainText = document.getElementById("main-text");
const locationText = document.getElementById("location-text")
var audioPlayer = document.getElementById("audiocontroller")
var audioPlayerIntro = document.getElementById("audiocontroller-intro")
var picture = document.getElementById("picture")
const questionText = document.getElementById("question-text")
const sendButton = document.getElementById("send-button")
const userInput = document.getElementById("answer")
var clickCheck = document.getElementById("click-check"); // Empty div element used to prohibit the user to double click in the first page 

// Hide some stuff from UI
audioPlayer.style.visibility = "hidden";
questionText.style.visibility = "visible";

// Make all elements appear on page load
// These are by default set to zero so this will elicit a gradual fade in when page is loaded.
locationText.style.opacity = 1;
sendButton.style.opacity = 1;
mainText.style.opacity = 1;
questionText.style.opacity = 1;

// Set empty userinput box
userInput.value = "";

function updateCounter() {
    // The correct answere is given, and so the chapter number is updated.
    chapterNumber = chapterNumber + 1 // Increase level num by one
    userInput.value = "";
    showChapter();

}

function change_element_at_audio_time(element, task, value, at_time) {
    // This function allows for changing an HTML element at a given 
    // time point of the audioPlayer element.
    let triggered = false;
    let interval = setInterval(function () {
        if (!triggered && audioPlayer.currentTime >= at_time) {
            triggered = true;

            // Based on "task"; update HTML element value
            if (task == 'innerHTML') {
                element.innerHTML = value;
                clearInterval(interval);
            }
            if (task == 'opacity') {
                element.style.opacity = value;
                clearInterval(interval);
            }
            if (task == 'change_image') {
                element.innerHTML = "<img src='" + value + "'/>";
                clearInterval(interval);
            }
            if (task == "visibility") {
                if (value == 1) {
                    element.style.visibility = "visible";
                }
                if (value == 0) {
                    element.style.visibility = "hidden";
                }
                clearInterval(interval);
            }
        }

    }, 50);
}

// Specify output text and displaying elements based on chapter
function showChapter() {

    switch (chapterNumber) {
        case 1:
            audioPlayerIntro.src = "Lydfiler/Damaged_song.mp3"
            audioPlayerIntro.play(); // Start intro background music
            audioPlayer.src = "Lydfiler/stille.mp3";
            audioPlayer.play();

            change_element_at_audio_time(mainText, 'opacity', 0, 1)
            change_element_at_audio_time(mainText, 'innerHTML', "Hører du musikk nå? Hvis ja: Sett deg ned. Gjør deg klar. </br> Hvis ikke: Da har du muligens ikke deaktivert Adblock. Forsøk en annen nettleser.", 5)
            change_element_at_audio_time(mainText, 'opacity', 1, 5)

            change_element_at_audio_time(sendButton, 'opacity', 0, 1)
            change_element_at_audio_time(sendButton, 'innerHTML', 'Ja! Åpne påskeegget', 5)
            change_element_at_audio_time(sendButton, 'opacity', 1, 5)

            change_element_at_audio_time(picture, 'opacity', 1, 5);
            change_element_at_audio_time(picture, 'change_image', "Bilder/front.jpg", 5);
            change_element_at_audio_time(clickCheck, 'innerHTML', 'Y', 5)
            break;

        case 2: // OSLO
            // Setup new sound file
            audioPlayer.src = "Lydfiler/Intro_ferdig.mp3"
            audioPlayer.play();
            correct_answer = ['london'];

            // Set smooth transitions of GUI elements
            change_element_at_audio_time(locationText, 'opacity', 0, 1)
            change_element_at_audio_time(mainText, 'opacity', 0, 1)
            change_element_at_audio_time(questionText, 'opacity', 0, 5)
            change_element_at_audio_time(picture, 'opacity', 1, 35);
            change_element_at_audio_time(picture, 'change_image', "Bilder/start.jpg", 10);

            change_element_at_audio_time(locationText, 'innerHTML', 'Oslo, Norge', 6)
            change_element_at_audio_time(locationText, 'opacity', 1, 8)
            change_element_at_audio_time(audioPlayer, 'opacity', 1, 15); // set to 15
            change_element_at_audio_time(audioPlayer, 'visibility', 1, 10);           // set to 10  

            // Show picture of bamse
            change_element_at_audio_time(picture, 'opacity', 0, 80);
            change_element_at_audio_time(picture, 'opacity', 1, 87);
            change_element_at_audio_time(picture, 'change_image', "Bilder/pb_pa_hasle.jpg", 85);

            // Show pictures of egg again
            change_element_at_audio_time(picture, 'opacity', 0, 150);
            change_element_at_audio_time(picture, 'change_image', "Bilder/start.jpg", 158);
            change_element_at_audio_time(picture, 'opacity', 1, 163);


            // Set questions for answering
            change_element_at_audio_time(questionText, 'innerHTML', "Hvor skal Politibamsen reise?", 10)
            change_element_at_audio_time(questionText, 'opacity', 1, 170)
            change_element_at_audio_time(userInput, 'visibility', 1, 10) // CHANGE THIS TO 10 AFTER DEBUGGING
            change_element_at_audio_time(userInput, 'opacity', 1, 170) // CHANGE THIS TO 170 AFTER DEBUGGING
            change_element_at_audio_time(sendButton, 'innerHTML', 'Neste', 6)
            change_element_at_audio_time(sendButton, 'opacity', 1, 170)
            break;

        case 3: // LONDON

            // Setup new sound file
            audioPlayer.src = "Lydfiler/2_ferdig.mp3"
            correct_answer = ['windsorhagen 32', '32 windsor gardens', '32 windsor garden', 'windsor hagen 32', 'windsorhagen', 'windsor garden'];
            resetScreenForNewChapter();

            // Fade out previous chapter
            change_element_at_audio_time(picture, 'opacity', 1, 6);
            change_element_at_audio_time(picture, 'change_image', "Bilder/sted1.jpg", 6);

            // Present new elements
            mainText.innerHTML = '</br> Politibamsen: Ja! Det gir mening. Jeg reiser dit med en gang.';
            change_element_at_audio_time(mainText, 'opacity', 1, 0);
            change_element_at_audio_time(mainText, 'opacity', 0, 5);
            change_element_at_audio_time(locationText, 'opacity', 1, 7)
            change_element_at_audio_time(locationText, 'innerHTML', "London, England", 7)

            change_element_at_audio_time(userInput, 'opacity', 1, 10)
            change_element_at_audio_time(sendButton, 'innerHTML', 'Neste', 6)
            change_element_at_audio_time(sendButton, 'opacity', 1, 170)

            break;

        case 4: // WINDSORHAGEN

            // Setup new sound file
            audioPlayer.src = "Lydfiler/3_ferdig.mp3"
            correct_answer = ['neuilly', 'neuilly-sur-seine', 'neuilly sur seine'];
            resetScreenForNewChapter();

            // Fade out previous chapter
            change_element_at_audio_time(picture, 'opacity', 1, 6);
            change_element_at_audio_time(picture, 'change_image', "Bilder/paddington.jpg", 5);

            // Present new elements
            mainText.innerHTML = '</br> Politibamsen: Jeg reiser til Paddington med en gang.';
            change_element_at_audio_time(mainText, 'opacity', 1, 0);
            change_element_at_audio_time(mainText, 'opacity', 0, 5);
            change_element_at_audio_time(locationText, 'opacity', 1, 7)
            change_element_at_audio_time(locationText, 'innerHTML', "Windsorhagen 32, London, England", 7)

            break;

        case 5: // Neuilly

            // Setup new sound file
            audioPlayer.src = "Lydfiler/4_ferdig.mp3"
            correct_answer = ['sulina'];
            resetScreenForNewChapter();

            // Fade out previous chapter
            change_element_at_audio_time(picture, 'opacity', 1, 15);
            change_element_at_audio_time(picture, 'change_image', "Bilder/tysk.jpg", 7);

            // Present new elements
            mainText.innerHTML = '</br> Politibamsen: Aha! Det er der han bodde? Jeg reiser dit med en gang.';
            change_element_at_audio_time(mainText, 'opacity', 1, 0);
            change_element_at_audio_time(mainText, 'opacity', 0, 5);
            change_element_at_audio_time(locationText, 'opacity', 1, 8)
            change_element_at_audio_time(locationText, 'innerHTML', "Neuilly-sur-Seine, Frankrike", 7)

            break;

        case 6: // SULINA
            // Setup new sound file
            audioPlayer.src = "Lydfiler/transylvania.mp3"
            correct_answer = ['helsinki', 'helsingfors'];
            audioPlayer.play(); // Required in this chapter because resetScreenForNewChapter() is not executed.

            // Specify times where elements appear or dissapear
            change_element_at_audio_time(locationText, 'opacity', 0, 1)
            change_element_at_audio_time(picture, 'opacity', 0, 1);
            change_element_at_audio_time(questionText, 'opacity', 0, 0)
            change_element_at_audio_time(questionText, 'innerHTML', "Hvilken by skal Politibamsen reise til?", 4)
            change_element_at_audio_time(questionText, 'opacity', 1, 4);
            change_element_at_audio_time(picture, 'opacity', 1, 10);
            change_element_at_audio_time(picture, 'change_image', "Bilder/pb_kjorer.jpg", 6);

            // Present new elements
            mainText.innerHTML = '</br> Politibamsen: Ja! Det gir mening. Jeg reiser dit med en gang.';
            change_element_at_audio_time(mainText, 'opacity', 1, 0);
            change_element_at_audio_time(mainText, 'opacity', 0, 5);
            change_element_at_audio_time(locationText, 'opacity', 1, 7)
            change_element_at_audio_time(locationText, 'innerHTML', "Transylvania, Romania", 7);

            // Fade out the car image: 0:50
            change_element_at_audio_time(picture, 'opacity', 0, 50);

            // Show image of bamse walking into castle at 1:08
            change_element_at_audio_time(picture, 'change_image', "Bilder/slott.jpg", 56);
            change_element_at_audio_time(picture, 'opacity', 1, 68);

            // Cut to black image at 1:20
            change_element_at_audio_time(picture, 'change_image', "Bilder/slott_sort.jpg", 80);

            // Show blood image at 1:30
            change_element_at_audio_time(picture, 'change_image', "Bilder/slott_blod.jpg", 90);

            break;



        case 7: // HELSINKI

            audioPlayer.src = "Lydfiler/sms_hell.mp3";
            correct_answer = ['petra'];

            resetScreenForNewChapter();

            // Specify times where elements appear or dissapear
            mainText.innerHTML = '</br> Politibamsen: Ja! Det gir mening. Jeg reiser dit med en gang.';
            change_element_at_audio_time(mainText, 'opacity', 1, 0);
            change_element_at_audio_time(mainText, 'opacity', 0, 5);
            change_element_at_audio_time(locationText, 'opacity', 1, 6)
            change_element_at_audio_time(locationText, 'innerHTML', "Helsinki, Finland", 6);

            change_element_at_audio_time(audioPlayer, 'opacity', 0, 1);
            change_element_at_audio_time(picture, 'change_image', "Bilder/sms_emma1.jpg", 5);
            change_element_at_audio_time(picture, 'opacity', 1, 7);
            change_element_at_audio_time(picture, 'change_image', "Bilder/sms_emma2.jpg", 11);

            break;


        case 8: // PETRA


            audioPlayer.src = "Lydfiler/pet_ferdig.mp3"
            correct_answer = ['bali'];
            resetScreenForNewChapter();

            // Fade out previous chapter
            change_element_at_audio_time(picture, 'opacity', 1, 10);
            change_element_at_audio_time(picture, 'change_image', "Bilder/pet_1.jpg", 6);
            change_element_at_audio_time(audioPlayer, 'opacity', 1, 3);

            // Present new elements
            mainText.innerHTML = '</br> Politibamsen: Ja! Det gir mening. Jeg reiser dit med en gang.';
            change_element_at_audio_time(mainText, 'opacity', 1, 0);
            change_element_at_audio_time(mainText, 'opacity', 0, 5);
            change_element_at_audio_time(locationText, 'opacity', 1, 7)
            change_element_at_audio_time(locationText, 'innerHTML', "Petra, Jordan", 7);
            break;


        case 9: // BALI

            // MOTTAR SMS FRA EMMA
            audioPlayer.src = "Lydfiler/sms.mp3";
            correct_answer = ['abkhazia', 'abkashia'];

            resetScreenForNewChapter();

            // Present new elements
            mainText.innerHTML = '</br> Politibamsen: Ja! Det gir mening. Jeg reiser dit med en gang.';

            change_element_at_audio_time(mainText, 'opacity', 1, 0);
            change_element_at_audio_time(mainText, 'opacity', 0, 5);
            change_element_at_audio_time(locationText, 'opacity', 1, 6)
            change_element_at_audio_time(locationText, 'innerHTML', "Bali, Indonesia", 6);

            change_element_at_audio_time(audioPlayer, 'opacity', 0, 1);
            change_element_at_audio_time(picture, 'change_image', "Bilder/sms_hiakzaba.jpg", 5);
            change_element_at_audio_time(picture, 'opacity', 1, 5);
            change_element_at_audio_time(picture, 'visibility', 0, 5);
            change_element_at_audio_time(picture, 'visibility', 1, 7);
            break;


        case 10: // ABKHAZIA

            // MOTTAR SMS FRA ABELARD
            audioPlayer.src = "Lydfiler/sms.mp3";
            correct_answer = ['marigot'];

            resetScreenForNewChapter();

            // Present new elements
            mainText.innerHTML = '</br> Politibamsen: Ja! Det gir mening. Jeg reiser dit med en gang.';

            change_element_at_audio_time(mainText, 'opacity', 1, 0);
            change_element_at_audio_time(mainText, 'opacity', 0, 5);
            change_element_at_audio_time(locationText, 'opacity', 1, 6)
            change_element_at_audio_time(locationText, 'innerHTML', "Abkhazia, Georgia/Russland", 6);
            change_element_at_audio_time(audioPlayer, 'opacity', 0, 1);
            change_element_at_audio_time(picture, 'change_image', "Bilder/sms_abelard.jpg", 5);
            change_element_at_audio_time(picture, 'opacity', 1, 5);
            change_element_at_audio_time(picture, 'visibility', 0, 5);
            change_element_at_audio_time(picture, 'visibility', 1, 7);

            break;

        case 11: // ST MARTIN
            audioPlayer.src = "Lydfiler/st_lyd.mp3"
            correct_answer = ['washington'];
            resetScreenForNewChapter();

            change_element_at_audio_time(audioPlayer, 'opacity', 1, 1);
            change_element_at_audio_time(picture, 'opacity', 1, 10);
            change_element_at_audio_time(picture, 'change_image', "Bilder/bamse_i_st.jpg", 6);

            // Present new elements
            mainText.innerHTML = '</br> Politibamsen: Så klart! Jeg reiser dit med en gang.';
            change_element_at_audio_time(mainText, 'opacity', 1, 0);
            change_element_at_audio_time(mainText, 'opacity', 0, 5);
            change_element_at_audio_time(locationText, 'opacity', 1, 7)
            change_element_at_audio_time(locationText, 'innerHTML', "Marigot, St. Martin", 7);

            // Picture of puzzel at 1:55
            change_element_at_audio_time(picture, 'opacity', 0, 110);
            change_element_at_audio_time(picture, 'change_image', "Bilder/mendelejev.jpg", 115);
            change_element_at_audio_time(picture, 'opacity', 1, 115);
            break;



        case 12: // WASHINGTON
            audioPlayer.src = "Lydfiler/usa.mp3"
            correct_answer = ['miami'];
            resetScreenForNewChapter();

            change_element_at_audio_time(picture, 'opacity', 1, 50);
            change_element_at_audio_time(picture, 'change_image', "Bilder/latin.jpg", 6);

            // Present new elements
            mainText.innerHTML = '</br> Wow! Den skjønte jeg ikke. Jeg reiser dit med en gang.';
            change_element_at_audio_time(mainText, 'opacity', 1, 0);
            change_element_at_audio_time(mainText, 'opacity', 0, 5);
            change_element_at_audio_time(locationText, 'opacity', 1, 7)
            change_element_at_audio_time(locationText, 'innerHTML', "Washington DC, USA", 7);
            break;

        case 13: // MIAMI

            audioPlayer.src = "Lydfiler/sms_hell.mp3";
            correct_answer = ['medellin', 'medellín'];

            resetScreenForNewChapter();

            // Present new elements
            mainText.innerHTML = '</br> Politibamsen: Selvsagt! Jeg reiser dit med en gang.';
            change_element_at_audio_time(mainText, 'opacity', 1, 0);
            change_element_at_audio_time(mainText, 'opacity', 0, 5);
            change_element_at_audio_time(locationText, 'opacity', 1, 6)
            change_element_at_audio_time(locationText, 'innerHTML', "Miami, USA", 6);

            change_element_at_audio_time(audioPlayer, 'opacity', 0, 1);
            change_element_at_audio_time(picture, 'change_image', "Bilder/sms_emma_a.jpg", 5);
            change_element_at_audio_time(picture, 'opacity', 1, 7);
            change_element_at_audio_time(picture, 'change_image', "Bilder/sms_emma_b.jpg", 11);

            break;

        case 14: // MEDELLIN

            audioPlayer.src = "Lydfiler/stille.mp3";
            correct_answer = ['antofagasta'];
            resetScreenForNewChapter();

            // Present new elements
            change_element_at_audio_time(audioPlayer, 'opacity', 1, 1);
            mainText.innerHTML = '</br> Politibamsen: Selvsagt! Jeg reiser dit med en gang.';
            change_element_at_audio_time(mainText, 'opacity', 1, 0);
            change_element_at_audio_time(mainText, 'opacity', 0, 5);
            change_element_at_audio_time(locationText, 'opacity', 1, 6)
            change_element_at_audio_time(locationText, 'innerHTML', "Medellín, Colombia", 6);

            change_element_at_audio_time(audioPlayer, 'opacity', 0, 1);
            change_element_at_audio_time(picture, 'change_image', "Bilder/brev.jpg", 5);
            change_element_at_audio_time(picture, 'opacity', 1, 6);

            break;

        case 15: // ANTOFAGASTA
            audioPlayer.src = "Lydfiler/baatscene_ferdig.mp3"
            correct_answer = ['påskeøya', 'rapa nui'];
            audioPlayer.play(); // Required in this chapter because resetScreenForNewChapter() is not executed.

            change_element_at_audio_time(locationText, 'opacity', 0, 1)
            change_element_at_audio_time(picture, 'opacity', 0, 1);
            change_element_at_audio_time(questionText, 'opacity', 0, 0)
            change_element_at_audio_time(questionText, 'innerHTML', "Hvor er Politibamsen?", 4)
            change_element_at_audio_time(questionText, 'opacity', 1, 102);

            // Present new elements
            mainText.innerHTML = '</br> Politibamsen: Så klart! Jeg reiser dit med en gang.';
            change_element_at_audio_time(picture, 'opacity', 1, 10);
            change_element_at_audio_time(picture, 'change_image', "Bilder/brygge.jpg", 6);
            change_element_at_audio_time(audioPlayer, 'opacity', 1, 8);

            change_element_at_audio_time(mainText, 'opacity', 1, 0);
            change_element_at_audio_time(mainText, 'opacity', 0, 5);
            change_element_at_audio_time(locationText, 'opacity', 1, 6)
            change_element_at_audio_time(locationText, 'innerHTML', "Antofagasta, Chile", 6);

            // Fade out image of boat
            change_element_at_audio_time(picture, 'opacity', 0, 55);
            change_element_at_audio_time(locationText, 'opacity', 0, 60)

            // Fade in beach image
            change_element_at_audio_time(picture, 'change_image', "Bilder/rapa.jpg", 90);
            change_element_at_audio_time(picture, 'opacity', 1, 100);

            // Turn off the answer input field and button for a while
            change_element_at_audio_time(userInput, 'opacity', 0, 1)
            change_element_at_audio_time(sendButton, 'opacity', 0, 1)
            change_element_at_audio_time(userInput, 'opacity', 1, 102)
            change_element_at_audio_time(sendButton, 'opacity', 1, 102)
            break;

        case 16: // FINAL

            audioPlayer.src = "Lydfiler/stille.mp3"
            correct_answer = ['påskeøya', 'rapa nui', 'påskeøyene'];
            audioPlayer.style.visibility = "hidden";
            resetScreenForNewChapter();
            audioPlayerIntro.volume = 0.8;
            audioPlayerIntro.currentTime = 1;
            audioPlayerIntro.play();

            // Present new elements
            mainText.innerHTML = '</br> Politibamsen: Uttrolig! Takk for hjelpa! Vi har fønni godteriet. Nå blir Emma glad!';
            change_element_at_audio_time(mainText, 'opacity', 1, 5);
            change_element_at_audio_time(picture, 'opacity', 1, 6);
            change_element_at_audio_time(picture, 'change_image', "Bilder/ferdig.jpg", 6);
            change_element_at_audio_time(locationText, 'opacity', 1, 6)
            change_element_at_audio_time(locationText, 'innerHTML', "Påskeøya", 6);

            // Fade out UI
            change_element_at_audio_time(audioPlayer, 'opacity', 0, 1);
            change_element_at_audio_time(userInput, 'opacity', 0, 1)
            change_element_at_audio_time(sendButton, 'opacity', 0, 1)

            change_element_at_audio_time(questionText, 'opacity', 0, 0)
            change_element_at_audio_time(questionText, 'innerHTML', "God Påske!", 5)
            change_element_at_audio_time(questionText, 'opacity', 1, 5)

            break;

        default:
            break;
    }


}


function resetScreenForNewChapter() {
    // This function does some standard UI changes which is used in almost every chapter.
    change_element_at_audio_time(locationText, 'opacity', 0, 1)
    change_element_at_audio_time(picture, 'opacity', 0, 1);
    audioPlayer.play();

    // If the question has been answered wrong; the question text has been altered. Reset this.
    if (questionHasChanged == 1) {
        change_element_at_audio_time(questionText, 'opacity', 0, 0)
        change_element_at_audio_time(questionText, 'innerHTML', "Hvor skal Politibamsen reise?", 4)
        change_element_at_audio_time(questionText, 'opacity', 1, 4);
        questionHasChanged = 0; // reset value to 0
    }
}

function checkInput() {
    // Check that user input is correct in relation to the current stage

    // For a new start
    if (chapterNumber == 0) {
        updateCounter();

    } else if (chapterNumber == 1) {
        if (clickCheck.innerHTML == 'Y') {
            fade_out_intro_audio();

            // Hide elements
            picture.style.opacity = 0;
            userInput.style.opacity = 0;
            sendButton.style.opacity = 0;
            
            updateCounter();
        }
    } else {
        // Check that input is correct 
        answerGiven = userInput.value;
        checkAnswer();
    }

}

function checkAnswer() {
    // Check that the answer given as input is correct
    if (correct_answer.includes(answerGiven.toLowerCase())) {
        updateCounter(); // step forward
    } else {
        tellAnswerWasWrong(); // Not correct
    }
}

function tellAnswerWasWrong() {
    questionHasChanged = 1;
    if (userInput.value == '') {
        questionText.innerHTML = 'Skrive inn et stedsnavn i feltet. Hvor skal Politibamsen reise?';
    } else {
        userInput.value = '';
        questionText.innerHTML = 'Hmmm... Nei, det kan nok ikke stemme. Forsøk noe annet.';
    }
}

function fade_out_intro_audio() {
    // Function to fade out the background music in the intro.
    let timer
    if (audioPlayerIntro.volume > 0) {
        audioPlayerIntro.volume -= 0.0015;
        timer = setTimeout(fade_out_intro_audio, 25);
    }
}

function main() {

    // If user clicks the button or ENTER (keyboard) then check input given.
    sendButton.addEventListener("click", function () {
        checkInput();
    })

    userInput.addEventListener("keyup", function (e) {
        if (e.keyCode == 13) {
            checkInput();
        }
    });


}

main();
