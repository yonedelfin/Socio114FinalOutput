/*let currentMessageIndex = 0;
const messages = [
  "This is your first message.",
  "Here's the second message.",
  "And this is the third one."
];

function updateButtonText() {
  const nextButton = document.getElementById('nextButton');
  if (currentMessageIndex < messages.length) {
    nextButton.textContent = 'Next';
  } else {
    nextButton.textContent = 'Replay';
  }
}

function nextButtonClick() {
  const dialogueText = document.getElementById('dialogueText');
  const dialogueBox = document.getElementById('dialogueBox');
  const nextButton = document.getElementById('nextButton'); // Ensure this line is present and correct

  if (currentMessageIndex < messages.length) {
    dialogueText.textContent = messages[currentMessageIndex];
    currentMessageIndex++;
    dialogueBox.style.display = 'block';
    updateButtonText(); // Update the button text

    // Add a simple animation to the button
    nextButton.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      nextButton.style.transform = 'translateY(0)';
    }, 200);
  } else {
    // Handle the replay logic here if needed
    currentMessageIndex = 0;
    nextButtonClick(); // For now, just replay from the beginning
  }
}

// Initial display of text
nextButtonClick();
*/
function explainerButtonClick() {
  const explainerButton = document.getElementById('explainer');

  window.location.href = 'explainer.html';


document.getElementById('explainer').addEventListener('click', explainerButtonClick);

  // Add a simple animation to the explainer button
  explainerButton.style.transform = 'translateY(10px)';
  setTimeout(() => {
    explainerButton.style.transform = 'translateY(0)';
  }, 200);

  // Add your explainer button click logic here
  console.log('Explainer button clicked!');
}

document.getElementById('explainer').addEventListener('click', explainerButtonClick);

// go back button
function goBack() {
  window.location.href = 'index.html';
}

let currentMessageIndex = 0;
const messages = [
  "Greetings, the Chosen One! I am the Keeper of Nature. Here at Sunset Farm, amidst the remnants of a once-thriving nation, weary travelers find solace under the canopy of resilient trees.",
  "This desolate wasteland, born from the greed of men, stretches beyond our sanctuary. A landscape marred by the relentless pursuit of wealth, leaving destruction in its wake. But fear not, for you, as the Chosen One, bear the mantle to wield the Scepter of Hope, a beacon in this darkness.",
  "Behold the Scepter of Hope, a symbol of possibility and change. With it, you possess the ability to inspire fellow fighters, granting them agency to initiate social change. Moreover, it grants you the power of Perspective, unveiling the intricate web of societal systems and structures that shape our world.",
  "But there must be balance between agency and structure. Fail to do so, and you succumb to Pessimism, diminishing your agency and talents.",
  "Before you wield the Scepter of Hope, let me first paint the canvas of our nation's history. Centuries of colonization birthed institutions that diluted our national identity. Power consolidated among the elite, leading to an unending cycle of exploitation.",
  "In our capitalist society, the environment became a vessel for the progress of mankind. In the process, it led to its destruction, as mountains were shaved down of its beauty while forcing the villages to migrate and conform to the uncertainty of urban life. Centuries before the desolation of our lands, the elites wielded the power to dictate beauty and cast aside what is not.", 
  "Thus, they destroyed that which they deemed undesirable, replacing it with modern structures that only benefited the rich and powerful. Yet, we, as a society, found ourselves in an agreement that these structures should be dismantled, entangled in our own inherent biases of what is beautiful and desirable.", 
  "The very function of capitalism, a system set to amass wealth in abundance, sowed the seeds of its own demise. As it reinforces and sustains itself, contradictions emerge, paving the way for its self-destruction. What a paradox indeed! In its relentless pursuit, capitalism forged its own downfall.",
  "Long have we attempted to replace the corrupt and covetous yet the impenetrable structure of exploitation of society remained. Merely altering the elements of the system proves insufficient once the patterns of thought and logic are deeply woven into the fabric of society. As the power they hold in a society thrive with exploitation, swapping out the elements alone fails to unravel the complex tapestry that binds us all.",
  "Even should the intricate dance of relations between elements be altered, the change would be incomplete. The elites sought to shift the blame onto us, humble individuals merely navigating the chaos of our daily existence while they paid no heed to their role in perpetuating this oppressive system that surrounds us all.",
  "Yet, the dilemma of environmental exploitation does not unfold in solitude; it intertwines with the intricate web of other systems. In the realm of governance, we once held hope that the election of righteous leaders would solve these troubles. But alas, it was only an illusion shattered by the ascension of these leaders into the association of the elites. Their coercive power enabled them to constrain and influence decisions with intricate finesse.",
  "The Villars, a name that echoes with great notoriety, stand as a testament to this manipulation. One amongst them ascended to the position of the Secretary of the Department of Public Works and Highways. Yet, beneath this defense of legality lies a glaring conflict of interest, as their familial business thrives in real estate and development. Such corruption lies in the decisions made that favor the kin over the welfare of the populace.",
  "Hark, Chosen One, for the tale extends beyond the shores of the Philippine islands. The environmental trials we face are not an isolated plight; they stem from the exploitation brought by mighty nations at the core.",
  "Immanuel Wallerstein, a wise sociologist, argued that the historical ascent of wealthy nations emerged from the amalgamation of ecological decay, social upheavals, and economic underdevelopment of peripheral lands. As these powerful nations accumulate excess capital and resources, the peripheral find themselves stripped of the very essentials required for their growth and further imbalance unfolds.",
  "While the narrative of the nation remains replete with hardship and trials, for the women, the challenges intensify. Trapped in a subordinate position by the systems of patriarchy, women find themselves more susceptible to the perils of environmental issues. Their vulnerability is amplified by the social, economic, and cultural factors that constrain their power in society.",
  "For instance, a significant number of individuals living in poverty comprises women, most of whom do not own land. Their sustenance hinges on local natural resources, a reliance further challenged by the exploitation of land by colonizers and elites. In times of crisis, women grapple not only with the struggles of a decaying environment but also with increased domestic violence, human trafficking, and rape.",
  "For the elderly and those with disabilities, long before the nation’s demise, their existence bore the weight of a fate unkind. Treated as second-class citizens, burdened by impediments that shadowed their every step, hindering them from fully experiencing their daily lives. The infrastructure worsened their plight by failing to accommodate their hindrances.", 
  "Alas, with the ruin of our land, the widespread devastation left them stranded without any help. Their struggles became obscured from the public, rendering them invisible. Now, our nation only grapples with a haunting legacy as we struggle to acknowledge the past and bear the burden of collective remorse.",
  "Inquisitive traveler, I sense your curiosity. What would the future appear in a society that holds hope in the face of structural adversity? In the echoes of despair, many amongst us have surrendered hope for the future. Fear pervades the air, whispering tales of societal collapse.",
  "Yet, let it be known that the roots of social disorder do not emerge out of thin air; instead, they are woven into the very fabric of our society and the intricate workings of institutions.", 
  "Amidst the despair, there remain souls who rise with the flame of hope. They dream of a day when the entire system that birthed these environmental afflictions undergoes a profound transformation. To achieve this, we must honor our individual agency in contributing to society, all while addressing the structural impediments that impede the holistic transformation of the system.",
  "The key is to contemplate the essence of environmental issues not as solitary echoes but as an elaborate convergence of diverse systems. Through the power of the Scepter of Hope, the nation shall be inspired and envision a future where humans harmonize with the environment. Picture a reality where the intricate dance of society and nature reveals their interconnected essence, forever bound in a dance of mutual understanding."
];

function updateButtonText() {
  const nextButton = document.getElementById('nextButton');
  if (currentMessageIndex < messages.length - 1) {
    nextButton.textContent = 'Next';
  } else {
    nextButton.textContent = 'Replay';
  }
}

function displayMessage() {
  const dialogueText = document.getElementById('dialogueText');
  const dialogueBox = document.getElementById('dialogueBox');

  dialogueText.textContent = messages[currentMessageIndex];
  dialogueBox.style.display = 'block';
  updateButtonText();
}

document.getElementById('nextButton').addEventListener('click', function() {
  if (currentMessageIndex < messages.length - 1) {
    currentMessageIndex++;
    displayMessage();
  } else {
    // Handle the replay logic here
    currentMessageIndex = 0;
    displayMessage(); // Display the first message again
  }
});

// Initial display of text
displayMessage();

