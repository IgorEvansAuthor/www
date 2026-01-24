   document.addEventListener('DOMContentLoaded', function() {
     const quotes = [
      "“Mildly amusing, despite its many flaws.”|@back_of_the_hand",
      "“It stinks!”|@JaySherman@mastodon.social",
      "“The cover art is misleading! I expected a Gor novel with sexy slavery, not this pretentious junk. Disappointed!”|@kajira_enjoyer_4488",
      "“Did not finish.”|@patience_mcgoo",
      "“I wanted to like it, but it was all Greek to me! Hur, hur, hur.”|@cleverhans.bsky.social",
      "“There's a first-rate story buried in this. Too bad I couldn't find it in all the Greek.”|@prowriter69@mastodon.social",
      "“Πάρα πολλά αγγλικά και όχι αρκετά ελληνικά σ’ αυτό το βιβλίο! (There's too much English and not enough Greek in this book!)”|@stavros_pseudopolis",
	  "“I endorse the protagoníst as a true son of Hellás, and a fierce synagoníst for the Ethnikís Palingenesía!”|Geórgios Papadópoulos",
	  "“A masterpiece of transparent narration and moral rectitude, brimming with exquisite recipes. Four forks!”|H. Lecter, PhD",	  
      "“Worst 20 minutes of my life.”|@SpeedReadRichards@mastodon.art",
      "“The story really is superb. Excellent world building, three interesting characters and a plot that moves really nicely, but [...]”|@bad_news_sandwich",
      "“Polarizing, and not in a good way. This is what happens when someone writes purely for their own amusement.”|@OhPenMinded@mstdn.social",
      "“Ideal for someone with a typical layman's knowledge of ancient Greek language and culture.”|@notaplant.bsky.social",
      "“It was an ok read, I guess. I liked all the killing, but why did he have to make those Greeks so gay?”|@the_real_greco_roamer",
      "“Amazing. Not only did it teach me ancient Greek, I now have the power of telekinesis!”|@psycho_warden",
      "“This is anti-entertaining: it felt very like reading a work of philosophy, or a religious text.”|@FatherMulcahey@hachyderm.io"
     ];

    const quoteBox = document.getElementById('quote-box');
    const quoteText = document.getElementById('quote-text');
    const quoteAttrib = document.getElementById('quote-text-attribution');
    const instructions = document.getElementById('quote-instructions');
    let currentQuote = -1;
    let interval_id;
    const delay = 9000;

    function showNextQuote() {
      currentQuote = (currentQuote + 1) % quotes.length;
      const parts = quotes[currentQuote].split('|');
      const quote = parts[0] ? parts[0].trim() : '';
      const attribution = parts[1] ? parts[1].trim() : '';
      quoteText.textContent = quote;
      quoteAttrib.textContent = attribution;
    }

    function startRotation() {
      instructions.style.visibility = 'hidden';
      interval_id = setInterval(showNextQuote, delay);
    }

    function stopRotation() {
      instructions.style.visibility = 'visible';
      clearInterval(interval_id);
    }

    // Initial quote
    showNextQuote();
    startRotation();

    // Handle mouse events
    quoteBox.addEventListener('mouseenter', stopRotation);
    quoteBox.addEventListener('mouseleave', startRotation);
    quoteBox.addEventListener('click', showNextQuote);
  });
  