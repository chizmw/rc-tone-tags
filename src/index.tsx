import { ActionPanel, CopyToClipboardAction, List, PasteAction, randomId } from "@raycast/api";

export default function Command() {
  const tones = tagData();
  return (
    <List>
      {tones.map((t) => (
        <List.Item
          key={randomId()}
          title={"/" + t.tag + " = " + t.key}
          subtitle={t.explanation}
          actions={
            <ActionPanel>
              <PasteAction content={"/" + t.tag} title={"Paste /" + t.tag} />
              <CopyToClipboardAction content={"/" + t.tag} title={"Copy '/" + t.tag + "' to Clipboard"} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}

function tagData() {
  // source: https://tonetags.carrd.co/#e
  const tones: { tag: string; key: string; explanation: string }[] = [
    {
      tag: "j",
      key: "joking",
      explanation: 'used when saying something in a joking manner; "so I\'m pretty much the president of twitter /j"',
    },
    {
      tag: "hj",
      key: "half joking",
      explanation:
        'used when saying something that is kind of a joke but kind of serious; "well I am usually right /hj"',
    },
    {
      tag: "s",
      key: "sarcastic / sarcasm",
      explanation: 'used when being sarcastic; "I really love feeling sad /sarc"',
    },
    {
      tag: "sarc",
      key: "sarcastic / sarcasm",
      explanation: 'used when being sarcastic; "I really love feeling sad /sarc"',
    },
    {
      tag: "srs",
      key: "serious",
      explanation: 'used when saying something you really mean "I really appreciate you /srs"',
    },
    {
      tag: "nsrs",
      key: "not serious",
      explanation: 'used when saying something not too seriously; "you\'re the worst /nsrs"',
    },
    {
      tag: "lh",
      key: "lighthearted",
      explanation: 'used when saying something lightheartedly; "hey leave me out of this /lh"',
    },
    {
      tag: "g",
      key: "genuine",
      explanation: 'used when saying something genuinely or when asking a legitimate question; "I\'m proud of you /g"',
    },
    {
      tag: "gen",
      key: "genuine",
      explanation: 'used when saying something genuinely or when asking a legitimate question; "I\'m proud of you /g"',
    },
    {
      tag: "ij",
      key: "inside joke",
      explanation:
        'a joke that is understood only by people with special knowledge about something; "ah my glubbies /ij"',
    },
    { tag: "ref", key: "reference", explanation: 'typically to media (movies, tv, music, etc); "memento mori /ref"' },
    { tag: "t", key: "teasing", explanation: "used when teasing someone; \"ok sure mr 'idk what I'm doing' /t\"" },
    {
      tag: "nm",
      key: "not mad",
      explanation: 'to indicate you are not actually mad or upset about something; "ouch I really related there /nm"',
    },
    {
      tag: "lu",
      key: "a little upset",
      explanation: 'used when upset about something but not too upset; "oh that sucks /lu"',
    },
    {
      tag: "nf",
      key: "not forced",
      explanation: 'used when saying to do something or when asking someone to do something; "retweet this /nf"',
    },
    {
      tag: "nbh",
      key: "nobody here",
      explanation:
        'used when tweeting something vague to assure followers it is not indirectly to or about them; "sometimes people say things that make me so upset /nbh"',
    },
    {
      tag: "nst",
      key: "not subtweeting",
      explanation:
        'used to assure people you aren\'t subtweeting them; "wow I really dislike (whatever thing you dislike) /nst"',
    },
    {
      tag: "nay",
      key: "not at you",
      explanation:
        'used when saying something but not meaning it at the person you are responding to someone quote retweets something you dislike with "look at this" and you respond with "no thank you /nay" you would be saying no thank you to whatever they quote retweeted. not no thank you to them saying to look at it.',
    },
    { tag: "ay", key: "at you", explanation: "used to make the person aware you are addressing them" },
    {
      tag: "nbr",
      key: "not being rude",
      explanation:
        "used when saying something that may seem rude but isn't meant to be rude \"I don't think you're doing that right /nbr\" in that sitiuation I would probably just be trying to be helpful by saying that they weren't doing something correctly. I want to make sure they know I was just trying to help not trying to be mean.",
    },
    {
      tag: "ot",
      key: "off topic",
      explanation: "used when saying something that isn't directly related to what was being discussed",
    },
    { tag: "th", key: "threat", explanation: 'used when giving a threat "if you don\'t stop I will block you /th"' },
    {
      tag: "cb",
      key: "clickbait",
      explanation: 'used when using clickbait "omg you have to look at this it will change your life /cb"',
    },
    { tag: "f", key: "fake", explanation: 'used when saying or referring to something not real; "<edited.jpg> /f"' },
    {
      tag: "q",
      key: "quote",
      explanation:
        'used when quoting something or someone "oh yes the past can hurt but the way I see it you can either run from it or you can learn from it /q"',
    },
    {
      tag: "l",
      key: "lyrics",
      explanation: 'used when quoting specifically song lyrics "I say the wrong shit at the right times /ly"',
    },
    {
      tag: "ly",
      key: "lyrics",
      explanation: 'used when quoting specifically song lyrics "I say the wrong shit at the right times /ly"',
    },
    { tag: "c", key: "copypasta", explanation: "a block of text which is copied and pasted across the internet" },
    {
      tag: "m",
      key: "metaphor",
      explanation:
        'used when saying something metaphorically "he is a shining star /m" he is not actually a star. he is being compared to one.',
    },
    {
      tag: "li",
      key: "literal",
      explanation:
        'used when saying something literally "wowie I don\'t like that /li" I would be saying that when I do actually dislike something.',
    },
    {
      tag: "rt",
      key: "rhetorical / rhetorical question",
      explanation: 'used when saying or asking something rhetorically "who cares? /rt" or "who cares? /rh"',
    },
    {
      tag: "rh",
      key: "rhetorical / rhetorical question",
      explanation: 'used when saying or asking something rhetorically "who cares? /rt" or "who cares? /rh"',
    },
    {
      tag: "hyp",
      key: "hyperbole",
      explanation:
        'exaggerated statements or claims not meant to be taken literally; "I have a million things to do today /hyp". I do not actually have to do one million things today. I was just meaning I have a lot of things to do today.',
    },
    {
      tag: "ex",
      key: "exaggeration",
      explanation: 'used when exaggerating; "what took you so long? I was waiting forever /ex"',
    },
    { tag: "p", key: "platonic", explanation: 'used when saying something with platonic intentions; "I love you /p"' },
    { tag: "r", key: "romantic", explanation: 'used when saying something with romantic intentions; "I love you /r"' },
    {
      tag: "a",
      key: "alterous",
      explanation:
        'an attraction best described as wanting emotional closeness without necessarily being (at all or entirely) platonic and/or romantic; "I love you /a"',
    },
    { tag: "sx", key: "sexual intent", explanation: "used when meaning something in a sexual way" },
    { tag: "x", key: "sexual intent", explanation: "used when meaning something in a sexual way" },
    { tag: "nsx", key: "non-sexual intent", explanation: "used when meaning something in a not sexual way" },
    { tag: "ns", key: "non-sexual intent", explanation: "used when meaning something in a not sexual way" },
    {
      tag: "pos",
      key: "positive / positive connotation",
      explanation:
        "used when saying something and meaning it in a positive way; \"oh my goodness I'm going to cry /pos\" implies I'm crying for a happy reason",
    },
    {
      tag: "pc",
      key: "positive / positive connotation",
      explanation:
        "used when saying something and meaning it in a positive way; \"oh my goodness I'm going to cry /pos\" implies I'm crying for a happy reason",
    },
    {
      tag: "neg",
      key: "negative / negative connotation",
      explanation:
        "used when saying something and meaning it in a negative way; \"oh my goodness I'm going to cry /neg\" implies I'm crying for an upsetting reason",
    },
    {
      tag: "nc",
      key: "negative / negative connotation",
      explanation:
        "used when saying something and meaning it in a negative way; \"oh my goodness I'm going to cry /neg\" implies I'm crying for an upsetting reason",
    },
    {
      tag: "neu",
      key: "neutral / neutral connotation",
      explanation:
        "used to show what you are saying is neutral or that you feel indifferent about it; \"oh yeah I don't care /neu\" you don't care about something but not in a mean or negative way - you are just indifferent",
    },
  ];

  return tones;
}
