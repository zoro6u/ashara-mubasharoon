/**
 * The Ten Companions Promised Paradise (العشرة المبشرون بالجنة).
 *
 * Each entry carries fully bilingual content (Arabic + English).
 * The `accent` colour seeds the per-companion glow / gradient so every
 * card and page feels distinct while staying within the gold family.
 *
 * IMAGES: drop real artwork into  /public/companions/<id>.webp
 * (back-view / silhouette / light-over-face — faces must remain abstract).
 * Until then the <CompanionPlaceholder> renders a generated SVG figure.
 */

export interface LocalizedText {
  ar: string
  en: string
}

export interface Companion {
  id: string
  order: number
  /** approximate arrangement hue for the glow, in HSL hue degrees */
  accent: number
  name: LocalizedText
  /** very short epithet shown under the name */
  title: LocalizedText
  lineage: LocalizedText
  /** one-line tagline used on the card */
  tagline: LocalizedText
  /** card-level short description */
  summary: LocalizedText
  /** full multi-paragraph biography (array of paragraphs) */
  biography: { ar: string[]; en: string[] }
  virtues: { ar: string[]; en: string[] }
  role: LocalizedText
  notableEvents: { ar: string[]; en: string[] }
  lifespan: LocalizedText
}

export const companions: Companion[] = [
  {
    id: 'abu-bakr',
    order: 1,
    accent: 45,
    name: { ar: 'أبو بكر الصِّدِّيق', en: 'Abu Bakr al-Siddiq' },
    title: { ar: 'الصِّدِّيق · أوّل الخلفاء الراشدين', en: 'The Truthful · First Rightly-Guided Caliph' },
    lineage: {
      ar: 'عبد الله بن أبي قُحافة عثمان بن عامر التَّيْمي القُرشي',
      en: "ʿAbdullah ibn Abi Quhafa ʿUthman ibn ʿAmir, of the clan of Banu Taym of Quraysh",
    },
    tagline: {
      ar: 'أوّل من آمن من الرجال ورفيق النبي في الغار',
      en: 'First man to embrace Islam and the Prophet’s companion in the Cave',
    },
    summary: {
      ar: 'الصِّدِّيق الأكبر، رفيق رسول الله ﷺ في الهجرة، وأوّل الخلفاء الراشدين الذي ثبّت الأمة بعد وفاة النبي.',
      en: 'The foremost Truthful one, the Prophet’s ﷺ companion in the migration, and the first caliph who held the nation firm after the Prophet’s passing.',
    },
    biography: {
      ar: [
        'أبو بكر الصِّدِّيق رضي الله عنه هو أوّل من آمن برسول الله ﷺ من الرجال، وأقرب الناس إليه وأحبّهم. وُلد بمكة بعد عام الفيل بنحو عامين ونصف، ونشأ تاجرًا معروفًا بالأمانة وكرم الخُلُق، محبوبًا في قومه لعلمه بالأنساب وسماحته.',
        'لمّا دعاه النبي ﷺ إلى الإسلام آمن من غير تردّد، فكان إيمانه سندًا للدعوة في أيامها الأولى، وأنفق ماله في تحرير المستضعفين من العبيد المسلمين، ومنهم بلال بن رباح رضي الله عنه.',
        'صحب النبيَّ ﷺ في هجرته إلى المدينة، فكانا في غار ثور حين قال الله فيهما: «ثاني اثنين إذ هما في الغار». ولمّا تُوفّي النبي ﷺ ثبت أبو بكر الناسَ بكلمته الخالدة: «من كان يعبد محمدًا فإنّ محمدًا قد مات، ومن كان يعبد الله فإنّ الله حيٌّ لا يموت».',
        'تولّى الخلافة فجمع القرآن، وقاتل المرتدّين ومانعي الزكاة حتى عادت الجزيرة إلى وحدتها، ثم وجّه الجيوش إلى الشام والعراق. تُوفّي سنة 13 للهجرة بعد خلافة دامت نحو عامين وأشهُر، ودُفن إلى جوار النبي ﷺ.',
      ],
      en: [
        'Abu Bakr al-Siddiq (may Allah be pleased with him) was the first adult man to believe in the Messenger of Allah ﷺ, and the closest and dearest of people to him. Born in Mecca about two and a half years after the Year of the Elephant, he grew into a respected merchant known for trustworthiness and noble character, beloved among his people for his knowledge of lineages and his gentleness.',
        'When the Prophet ﷺ invited him to Islam he believed without hesitation, and his faith became a pillar for the call in its earliest days. He spent his wealth freeing oppressed Muslim slaves — among them Bilal ibn Rabah (may Allah be pleased with him).',
        'He accompanied the Prophet ﷺ on the migration to Madinah, and the two were in the Cave of Thawr when Allah described them as "the second of two, when they were in the cave." When the Prophet ﷺ died, Abu Bakr steadied the people with his timeless words: "Whoever worshipped Muhammad — Muhammad has died; whoever worships Allah — Allah is Living and never dies."',
        'As caliph he gathered the Qur’an, fought the apostates and those who withheld the zakah until the peninsula returned to unity, then directed the armies toward Syria and Iraq. He died in 13 AH after a caliphate of roughly two years, and was buried beside the Prophet ﷺ.',
      ],
    },
    virtues: {
      ar: [
        'أوّل الرجال إسلامًا وأثبتهم يقينًا',
        'صاحب النبي ﷺ في الغار والهجرة',
        'لُقِّب بالصِّدِّيق لتصديقه بالإسراء والمعراج',
        'أنفق ماله كلّه في سبيل الله',
        'إمام الناس في الصلاة في مرض النبي ﷺ',
      ],
      en: [
        'First man to accept Islam, firmest in certainty',
        'The Prophet’s ﷺ companion in the Cave and the migration',
        'Named "al-Siddiq" for affirming the Night Journey',
        'Spent the whole of his wealth in the path of Allah',
        'Led the people in prayer during the Prophet’s ﷺ final illness',
      ],
    },
    role: {
      ar: 'أوّل الخلفاء الراشدين، جامع القرآن، وحامي وحدة الأمة في حروب الرِّدّة.',
      en: 'First of the Rightly-Guided Caliphs, compiler of the Qur’an, and guardian of the nation’s unity through the Apostasy Wars.',
    },
    notableEvents: {
      ar: [
        'الهجرة مع النبي ﷺ ولجوءهما إلى غار ثور',
        'تثبيت الناس عند وفاة النبي ﷺ',
        'حروب الرِّدّة وإعادة توحيد الجزيرة',
        'الشروع في جمع القرآن الكريم',
      ],
      en: [
        'The migration with the Prophet ﷺ and their refuge in the Cave of Thawr',
        'Steadying the believers at the Prophet’s ﷺ death',
        'The Apostasy Wars and the re-unification of Arabia',
        'Initiating the compilation of the Qur’an',
      ],
    },
    lifespan: { ar: '٥١ ق.هـ – ١٣ هـ', en: 'c. 573 – 634 CE (13 AH)' },
  },

  {
    id: 'umar',
    order: 2,
    accent: 40,
    name: { ar: 'عُمر بن الخطّاب', en: 'Umar ibn al-Khattab' },
    title: { ar: 'الفاروق · أمير المؤمنين', en: 'Al-Faruq · Commander of the Faithful' },
    lineage: {
      ar: 'عُمر بن الخطّاب بن نُفَيل العَدَوي القُرشي',
      en: 'ʿUmar ibn al-Khattab ibn Nufayl, of the clan of Banu ʿAdiyy of Quraysh',
    },
    tagline: {
      ar: 'الفاروق الذي أعزّ الله به الإسلام',
      en: 'Al-Faruq, by whom Allah gave Islam its strength',
    },
    summary: {
      ar: 'الفاروق الذي فرّق الله به بين الحق والباطل، ثاني الخلفاء الراشدين، ومؤسّس دواوين الدولة وعدلها.',
      en: 'Al-Faruq, by whom Allah distinguished truth from falsehood — second caliph and architect of the state’s institutions and its justice.',
    },
    biography: {
      ar: [
        'عُمر بن الخطّاب رضي الله عنه من أشراف قريش، اشتهر بقوّته وهيبته وعدله. كان في أوّل أمره من أشدّ الناس على المسلمين، حتى دعا له النبي ﷺ، فأسلم في السنة السادسة من البعثة، فكان إسلامه فتحًا أعزّ الله به الدين.',
        'لُقِّب بالفاروق لأنّ الله فرّق به بين الحق والباطل؛ فبإسلامه جهر المسلمون بصلاتهم عند الكعبة بعد أن كانوا مستخفين. وكان النبي ﷺ يقول: «لو كان بعدي نبيٌّ لكان عُمر».',
        'تولّى الخلافة بعد أبي بكر، فاتّسعت الفتوحات في عهده حتى دخلت الشام ومصر والعراق وفارس في الإسلام. ومع اتّساع الملك ضرب أروع الأمثلة في الزهد والعدل، فكان يطوف ليلًا يتفقّد رعيّته، ويقول: «لو عثرت بغلة في العراق لخشيت أن يسألني الله عنها».',
        'هو أوّل من اتّخذ التاريخ الهجري، ودوّن الدواوين، ومصّر الأمصار، وأنشأ نظام القضاء وبيت المال. استُشهد رضي الله عنه طعنًا وهو يصلّي الفجر سنة 23 للهجرة، ودُفن إلى جوار النبي ﷺ وأبي بكر.',
      ],
      en: [
        'ʿUmar ibn al-Khattab (may Allah be pleased with him) was among the nobles of Quraysh, renowned for his strength, awe-inspiring presence, and justice. At first he was among the harshest opponents of the Muslims, until the Prophet ﷺ prayed for him; he embraced Islam in the sixth year of the mission, and his acceptance was a victory by which Allah strengthened the faith.',
        'He was named al-Faruq because Allah distinguished truth from falsehood through him: upon his Islam the Muslims prayed openly at the Kaʿbah after praying in secret. The Prophet ﷺ said, "Were there to be a prophet after me, it would be ʿUmar."',
        'He assumed the caliphate after Abu Bakr, and the conquests expanded greatly in his era until Syria, Egypt, Iraq, and Persia entered Islam. Yet amid this vast dominion he set the finest examples of asceticism and justice, patrolling by night to check on his people and saying, "Were a mule to stumble in Iraq, I would fear that Allah would ask me about it."',
        'He was the first to establish the Hijri calendar, to organize the administrative registers (dawawin), to found garrison cities, and to institute systems of judiciary and the public treasury. He was martyred — stabbed while leading the Fajr prayer — in 23 AH, and was buried beside the Prophet ﷺ and Abu Bakr.',
      ],
    },
    virtues: {
      ar: [
        'الفاروق الذي أعزّ الله به الإسلام',
        'مُحدَّث مُلهَم وافق القرآنُ رأيَه في مواضع',
        'ضرب المثل الأعلى في العدل والزهد',
        'أوّل من سُمّي أمير المؤمنين',
        'اتّسعت في عهده الفتوحات شرقًا وغربًا',
      ],
      en: [
        'Al-Faruq, by whom Allah strengthened Islam',
        'Divinely inspired — the Qur’an affirmed his view in several matters',
        'The highest example of justice and asceticism',
        'First to be called "Commander of the Faithful"',
        'Under him the conquests spread east and west',
      ],
    },
    role: {
      ar: 'ثاني الخلفاء الراشدين، باني مؤسّسات الدولة الإسلامية وموسّع رقعتها.',
      en: 'Second of the Rightly-Guided Caliphs, builder of the Islamic state’s institutions and expander of its frontiers.',
    },
    notableEvents: {
      ar: [
        'إسلامه الذي جهر المسلمون بعده بدينهم',
        'فتح بيت المقدس وتسلّمه مفاتيحها',
        'وضع التقويم الهجري وتأسيس الدواوين',
        'استشهاده في محراب صلاة الفجر',
      ],
      en: [
        'His Islam, after which the Muslims worshipped openly',
        'The conquest of Jerusalem and his receiving its keys',
        'Establishing the Hijri calendar and the state registers',
        'His martyrdom in the prayer-niche during Fajr',
      ],
    },
    lifespan: { ar: '٤٠ ق.هـ – ٢٣ هـ', en: 'c. 584 – 644 CE (23 AH)' },
  },

  {
    id: 'uthman',
    order: 3,
    accent: 48,
    name: { ar: 'عُثمان بن عفّان', en: 'Uthman ibn Affan' },
    title: { ar: 'ذو النُّورَين · جامع المصحف', en: 'Possessor of the Two Lights · Unifier of the Mushaf' },
    lineage: {
      ar: 'عُثمان بن عفّان بن أبي العاص الأُمَوي القُرشي',
      en: 'ʿUthman ibn ʿAffan ibn Abi al-ʿAs, of the clan of Banu Umayyah of Quraysh',
    },
    tagline: {
      ar: 'الحَيِيُّ الكريم الذي جهّز جيش العُسرة',
      en: 'The modest and generous one who equipped the Army of Hardship',
    },
    summary: {
      ar: 'ذو النُّورَين، تزوّج ابنتي النبي ﷺ، ثالث الخلفاء، وجامع الأمة على مصحف واحد.',
      en: 'Possessor of the Two Lights, who married two daughters of the Prophet ﷺ — third caliph and the one who united the nation upon a single Qur’anic codex.',
    },
    biography: {
      ar: [
        'عُثمان بن عفّان رضي الله عنه من السابقين الأوّلين إلى الإسلام، أسلم على يد أبي بكر الصِّدِّيق. كان تاجرًا غنيًّا كريمًا، اشتهر بالحياء حتى قال النبي ﷺ: «ألا أستحي من رجلٍ تستحي منه الملائكة».',
        'لُقِّب بذي النُّورَين لأنّه تزوّج ابنتي رسول الله ﷺ رقيّة ثم أمّ كلثوم. هاجر الهجرتين إلى الحبشة ثم إلى المدينة، وبذل ماله في نصرة الدين، فاشترى بئر رُومة وسبّلها للمسلمين، وجهّز جيش العُسرة في غزوة تبوك.',
        'تولّى الخلافة بعد عُمر، فاتّسعت الفتوحات وأُنشئ أوّل أسطول بحري إسلامي. وأعظم آثاره جمع الأمة على مصحف واحد حين خشي اختلاف الناس في القراءة، فنسخ المصاحف وأرسلها إلى الأمصار، فحفظ الله به وحدة كتابه.',
        'حُوصر في داره من قِبل الثائرين، فصبر ولم يُرِق دمًا دفاعًا عن نفسه، واستُشهد رضي الله عنه وهو صائم يتلو القرآن سنة 35 للهجرة، فكان أوّل فتنةٍ كبرى أصابت الأمة.',
      ],
      en: [
        'ʿUthman ibn ʿAffan (may Allah be pleased with him) was among the very first to accept Islam, embracing it at the hand of Abu Bakr al-Siddiq. A wealthy and generous merchant, he was famed for his modesty, so much so that the Prophet ﷺ said, "Should I not feel shy before a man before whom the angels feel shy?"',
        'He was named "Possessor of the Two Lights" because he married two daughters of the Messenger of Allah ﷺ — Ruqayyah, then Umm Kulthum. He made both migrations, to Abyssinia and then to Madinah, and gave his wealth for the faith: he bought the Well of Rumah and endowed it for the Muslims, and equipped the Army of Hardship for the expedition of Tabuk.',
        'He became caliph after ʿUmar; the conquests widened and the first Islamic naval fleet was built. His greatest legacy was uniting the nation upon a single codex when he feared people would differ in recitation — he copied the masahif and sent them to the provinces, so that through him Allah preserved the unity of His Book.',
        'He was besieged in his house by rebels, yet he endured and shed no blood in his own defense, and was martyred while fasting and reciting the Qur’an in 35 AH — the first great trial to strike the nation.',
      ],
    },
    virtues: {
      ar: [
        'ذو النُّورَين، صهر النبي ﷺ مرّتين',
        'اشتهر بالحياء حتى استحت منه الملائكة',
        'جهّز جيش العُسرة وسبّل بئر رُومة',
        'جمع الأمة على مصحف واحد',
        'من السابقين الأوّلين إلى الإسلام',
      ],
      en: [
        'Possessor of the Two Lights — twice the Prophet’s ﷺ son-in-law',
        'Famed for a modesty before which even angels were shy',
        'Equipped the Army of Hardship and endowed the Well of Rumah',
        'United the nation upon a single Qur’anic codex',
        'Among the very earliest to accept Islam',
      ],
    },
    role: {
      ar: 'ثالث الخلفاء الراشدين، جامع المصحف الإمام، وموسّع الفتوحات البحرية.',
      en: 'Third of the Rightly-Guided Caliphs, compiler of the unified Mushaf, and expander of the naval conquests.',
    },
    notableEvents: {
      ar: [
        'زواجه من ابنتي النبي ﷺ',
        'شراء بئر رُومة وتجهيز جيش العُسرة',
        'توحيد المصاحف ونشرها في الأمصار',
        'صبره يوم الدار واستشهاده تاليًا للقرآن',
      ],
      en: [
        'His marriage to two daughters of the Prophet ﷺ',
        'Buying the Well of Rumah and equipping the Army of Hardship',
        'Unifying the masahif and dispatching them to the provinces',
        'His patience on the Day of the House and martyrdom over the Qur’an',
      ],
    },
    lifespan: { ar: '٤٧ ق.هـ – ٣٥ هـ', en: 'c. 576 – 656 CE (35 AH)' },
  },

  {
    id: 'ali',
    order: 4,
    accent: 50,
    name: { ar: 'عليّ بن أبي طالب', en: 'Ali ibn Abi Talib' },
    title: { ar: 'أبو الحسن · باب مدينة العلم', en: 'Abu al-Hasan · The Gate of the City of Knowledge' },
    lineage: {
      ar: 'عليّ بن أبي طالب بن عبد المطّلب الهاشمي القُرشي',
      en: 'ʿAli ibn Abi Talib ibn ʿAbd al-Muttalib, of the clan of Banu Hashim of Quraysh',
    },
    tagline: {
      ar: 'أوّل الفتيان إسلامًا وفارس المسلمين',
      en: 'First of the youth to accept Islam and the knight of the Muslims',
    },
    summary: {
      ar: 'ابن عمّ النبي ﷺ وصهره وزوج فاطمة، أوّل الصبيان إسلامًا، رابع الخلفاء، وباب مدينة العلم.',
      en: 'The Prophet’s ﷺ cousin and son-in-law, husband of Fatimah, first youth to accept Islam, fourth caliph, and the gate of the city of knowledge.',
    },
    biography: {
      ar: [
        'عليّ بن أبي طالب رضي الله عنه ابن عمّ رسول الله ﷺ، ربّاه النبيُّ في بيته، فكان أوّل من أسلم من الصبيان وهو ابن نحو عشر سنين. نشأ على الإيمان لم يعرف الشرك قطّ، وتزوّج فاطمة الزهراء بنت النبي ﷺ، فكان منه الحسن والحسين سيّدا شباب أهل الجنّة.',
        'فدى النبيَّ ﷺ ليلة الهجرة فنام في فراشه ليُضلّل المشركين. وشهد المشاهد كلّها إلا تبوك، وكان من أشجع الناس وأعظمهم بلاءً، حمل الراية يوم خيبر ففتح الله على يديه، وقال فيه النبي ﷺ: «أنت منّي بمنزلة هارون من موسى إلا أنّه لا نبيّ بعدي».',
        'اشتهر بالعلم والقضاء والفصاحة، حتى قيل: «أنا مدينة العلم وعليٌّ بابها». كان زاهدًا في الدنيا، عادلًا في حكمه، بليغًا في خطبه التي صارت منهلًا للحكمة.',
        'تولّى الخلافة في زمن فتنة واضطراب، فاجتهد في حقن الدماء وإقامة العدل. استُشهد رضي الله عنه طعنًا في مسجد الكوفة وهو خارجٌ لصلاة الفجر سنة 40 للهجرة.',
      ],
      en: [
        'ʿAli ibn Abi Talib (may Allah be pleased with him) was the cousin of the Messenger of Allah ﷺ, raised in his household. He was the first youth to accept Islam, at about ten years of age, growing up upon faith and never knowing idolatry. He married Fatimah al-Zahra, the Prophet’s ﷺ daughter, and from them came al-Hasan and al-Husayn, the masters of the youth of Paradise.',
        'He ransomed the Prophet ﷺ on the night of the migration, sleeping in his bed to mislead the polytheists. He witnessed every battle save Tabuk, and was among the bravest and most steadfast of men. He carried the banner at Khaybar and Allah granted victory through him; the Prophet ﷺ said of him, "You are to me as Aaron was to Moses, except that there is no prophet after me."',
        'He was renowned for knowledge, judgment, and eloquence, so that it was said, "I am the city of knowledge and ʿAli is its gate." He was ascetic in worldly matters, just in his rule, and eloquent in sermons that became a wellspring of wisdom.',
        'He assumed the caliphate in a time of trial and turmoil, striving to spare blood and uphold justice. He was martyred — struck down in the mosque of Kufa as he went out for the Fajr prayer — in 40 AH.',
      ],
    },
    virtues: {
      ar: [
        'أوّل الصبيان إسلامًا، نشأ في بيت النبوّة',
        'زوج فاطمة وأبو الحسن والحسين',
        'فارس الإسلام وحامل الراية يوم خيبر',
        'باب مدينة العلم وأقضى الصحابة',
        'نام في فراش النبي ﷺ ليلة الهجرة',
      ],
      en: [
        'First youth to accept Islam, raised in the Prophet’s home',
        'Husband of Fatimah and father of al-Hasan and al-Husayn',
        'Knight of Islam and banner-bearer at Khaybar',
        'The gate of the city of knowledge, foremost in judgment',
        'Slept in the Prophet’s ﷺ bed on the night of migration',
      ],
    },
    role: {
      ar: 'رابع الخلفاء الراشدين، إمام في العلم والقضاء، وفارس من فرسان الإسلام.',
      en: 'Fourth of the Rightly-Guided Caliphs, an imam in knowledge and judgment, and one of the great knights of Islam.',
    },
    notableEvents: {
      ar: [
        'مبيته في فراش النبي ﷺ ليلة الهجرة',
        'فتح خيبر تحت رايته',
        'قضاؤه وعلمه الذي صار مرجعًا للأمّة',
        'خلافته في زمن الفتنة واستشهاده',
      ],
      en: [
        'Lying in the Prophet’s ﷺ bed on the night of migration',
        'The conquest of Khaybar under his banner',
        'His judgments and knowledge, a reference for the nation',
        'His caliphate amid trial and his martyrdom',
      ],
    },
    lifespan: { ar: '٢٣ ق.هـ – ٤٠ هـ', en: 'c. 601 – 661 CE (40 AH)' },
  },

  {
    id: 'talha',
    order: 5,
    accent: 38,
    name: { ar: 'طلحة بن عُبيد الله', en: 'Talha ibn Ubaydullah' },
    title: { ar: 'طلحة الخير · الشهيد الحيّ', en: 'Talha of Goodness · The Living Martyr' },
    lineage: {
      ar: 'طلحة بن عُبيد الله بن عثمان التَّيْمي القُرشي',
      en: 'Talha ibn ʿUbaydullah ibn ʿUthman, of the clan of Banu Taym of Quraysh',
    },
    tagline: {
      ar: 'وقى النبيَّ ﷺ بيده يوم أُحد',
      en: 'He shielded the Prophet ﷺ with his hand at Uhud',
    },
    summary: {
      ar: 'طلحة الخير والجود، أحد الثمانية السابقين إلى الإسلام، الذي سمّاه النبي ﷺ الشهيد الحيّ.',
      en: 'Talha of goodness and generosity, one of the first eight to embrace Islam, whom the Prophet ﷺ called "the living martyr."',
    },
    biography: {
      ar: [
        'طلحة بن عُبيد الله رضي الله عنه من السابقين الأوّلين، أسلم على يد أبي بكر الصِّدِّيق وهو من قبيلته، فكان من الثمانية الذين سبقوا الناس إلى الإسلام. كان تاجرًا غنيًّا اشتهر بالكرم حتى لُقّب بطلحة الخير وطلحة الفيّاض.',
        'تجلّى بلاؤه العظيم يوم أُحد، حين ثبت مع النبي ﷺ وأكثر الناس قد تفرّقوا، فجعل يقي رسول الله ﷺ بنفسه ويتلقّى السهام بيده حتى شُلّت، وأصابه بضع وسبعون جراحة. قال فيه النبي ﷺ يومئذٍ: «من سرّه أن ينظر إلى شهيدٍ يمشي على وجه الأرض فلينظر إلى طلحة».',
        'كان جوادًا لا يُمسك مالًا، يفرّق عطاءه في الفقراء والمحتاجين، ويصل رحمه ويقضي ديون الناس. شهد المشاهد مع النبي ﷺ بعد أُحد، وكان من أهل الشورى الستّة الذين رشّحهم عُمر للخلافة.',
        'استُشهد رضي الله عنه يوم الجمل سنة 36 للهجرة، فختم حياته بما عاش له من بذل ووفاء، رضي الله عنه وأرضاه.',
      ],
      en: [
        'Talha ibn ʿUbaydullah (may Allah be pleased with him) was among the very first believers, embracing Islam at the hand of Abu Bakr al-Siddiq, his fellow clansman — one of the eight who preceded the people into Islam. A wealthy merchant famed for generosity, he was named "Talha of goodness" and "Talha the overflowing."',
        'His great valour shone at Uhud, when he stood firm beside the Prophet ﷺ as most had scattered, shielding the Messenger of Allah ﷺ with his own body and catching arrows with his hand until it was paralyzed — he bore more than seventy wounds. The Prophet ﷺ said that day, "Whoever wishes to look at a martyr walking upon the earth, let him look at Talha."',
        'He was so generous that he withheld no wealth, distributing his gifts among the poor and needy, maintaining ties of kinship and paying off people’s debts. He witnessed the battles with the Prophet ﷺ after Uhud, and was among the six members of the consultative council ʿUmar nominated for the caliphate.',
        'He was martyred at the Battle of the Camel in 36 AH, sealing his life with the same devotion and giving by which he had lived.',
      ],
    },
    virtues: {
      ar: [
        'من الثمانية السابقين إلى الإسلام',
        'وقى النبيَّ ﷺ بيده يوم أُحد حتى شُلّت',
        'سمّاه النبي ﷺ «الشهيد الحيّ»',
        'لقّب بطلحة الخير والفيّاض لكرمه',
        'من أهل الشورى الستّة',
      ],
      en: [
        'Among the first eight to accept Islam',
        'Shielded the Prophet ﷺ at Uhud until his hand was paralyzed',
        'Called "the living martyr" by the Prophet ﷺ',
        'Named "Talha of goodness" and "the overflowing" for his generosity',
        'One of the six of the consultative council',
      ],
    },
    role: {
      ar: 'فارس مجاهد من السابقين، ومن أهل الشورى، ونموذج في الجود والوفاء.',
      en: 'A warrior-knight among the earliest believers, a member of the consultative council, and a model of generosity and loyalty.',
    },
    notableEvents: {
      ar: [
        'إسلامه المبكّر على يد أبي بكر',
        'ثباته وبلاؤه العظيم يوم أُحد',
        'دخوله في أهل الشورى الستّة',
        'استشهاده يوم الجمل',
      ],
      en: [
        'His early Islam at the hand of Abu Bakr',
        'His steadfastness and great valour at Uhud',
        'His inclusion among the six of the council',
        'His martyrdom at the Battle of the Camel',
      ],
    },
    lifespan: { ar: '٢٨ ق.هـ – ٣٦ هـ', en: 'c. 594 – 656 CE (36 AH)' },
  },

  {
    id: 'zubayr',
    order: 6,
    accent: 52,
    name: { ar: 'الزُّبير بن العوّام', en: 'Al-Zubayr ibn al-Awwam' },
    title: { ar: 'حَوَاريُّ رسول الله ﷺ', en: 'The Disciple of the Messenger ﷺ' },
    lineage: {
      ar: 'الزُّبير بن العوّام بن خُويلد الأسدي القُرشي',
      en: 'Al-Zubayr ibn al-ʿAwwam ibn Khuwaylid, of the clan of Banu Asad of Quraysh',
    },
    tagline: {
      ar: 'أوّل من سلّ سيفه في سبيل الله',
      en: 'The first to draw his sword in the path of Allah',
    },
    summary: {
      ar: 'حَوَاريُّ النبي ﷺ وابن عمّته صفيّة، أوّل من سلّ سيفه في الإسلام، من السابقين وأهل الشورى.',
      en: 'The Prophet’s ﷺ disciple and son of his aunt Safiyyah, the first to draw a sword in Islam, among the earliest believers and the consultative council.',
    },
    biography: {
      ar: [
        'الزُّبير بن العوّام رضي الله عنه ابن عمّة النبي ﷺ صفيّة بنت عبد المطّلب، أسلم وهو ابن نحو خمس عشرة سنة، فكان من السابقين الأوّلين. واشتُهر بأنّه أوّل من سلّ سيفه في سبيل الله؛ إذ سمع إشاعة أنّ النبيَّ ﷺ أُصيب، فخرج شاهرًا سيفه يشقّ طرق مكة حتى لقي النبي ﷺ فدعا له.',
        'صبر على أذى المشركين في أوّل إسلامه، وهاجر إلى الحبشة ثم إلى المدينة، وشهد بدرًا وأُحدًا والمشاهد كلّها. قال فيه النبي ﷺ: «إنّ لكلّ نبيّ حَوَاريًّا، وحَوَاريَّ الزُّبير».',
        'كان فارسًا شجاعًا كريمًا، تاجرًا موفّقًا أنفق ماله في سبيل الله. وكان من العشرة المبشّرين بالجنّة، ومن أهل الشورى الستّة الذين اختارهم عُمر، ومن الذين رُضي عنهم في بيعة الرضوان.',
        'استُشهد رضي الله عنه بعد انصرافه عن وقعة الجمل سنة 36 للهجرة في وادٍ يُعرف بوادي السباع، فقُتل غدرًا وهو معتزلٌ للقتال.',
      ],
      en: [
        'Al-Zubayr ibn al-ʿAwwam (may Allah be pleased with him) was the son of the Prophet’s ﷺ aunt, Safiyyah bint ʿAbd al-Muttalib. He accepted Islam at about fifteen, among the very first believers, and is famed as the first to draw a sword in the path of Allah: hearing a rumour that the Prophet ﷺ had been seized, he rushed out, sword unsheathed, cutting through the streets of Mecca until he met the Prophet ﷺ, who prayed for him.',
        'He endured the harm of the polytheists in his early Islam, migrated to Abyssinia and then to Madinah, and witnessed Badr, Uhud, and every battle. The Prophet ﷺ said of him, "Every prophet has a disciple, and my disciple is al-Zubayr."',
        'He was a brave and generous knight and a successful merchant who spent his wealth in the path of Allah. He was among the Ten Promised Paradise, among the six of the council chosen by ʿUmar, and among those with whom Allah was pleased at the Pledge of Ridwan.',
        'He was martyred after withdrawing from the Battle of the Camel in 36 AH, treacherously slain in a valley known as the Valley of the Beasts while he had already left the fighting.',
      ],
    },
    virtues: {
      ar: [
        'حَوَاريُّ رسول الله ﷺ',
        'أوّل من سلّ سيفه في سبيل الله',
        'ابن عمّة النبي ﷺ صفيّة بنت عبد المطّلب',
        'من السابقين وأهل بيعة الرضوان',
        'من أهل الشورى الستّة',
      ],
      en: [
        'The disciple (hawari) of the Messenger of Allah ﷺ',
        'The first to draw a sword in the path of Allah',
        'Son of the Prophet’s ﷺ aunt, Safiyyah bint ʿAbd al-Muttalib',
        'Among the earliest believers and the people of Ridwan',
        'One of the six of the consultative council',
      ],
    },
    role: {
      ar: 'فارس مجاهد وحَوَاريُّ النبي ﷺ، من أهل الشورى والسابقين إلى الإسلام.',
      en: 'A warrior-knight and the Prophet’s ﷺ disciple, among the consultative council and the earliest in Islam.',
    },
    notableEvents: {
      ar: [
        'كونه أوّل من سلّ سيفه في الإسلام',
        'هجرتاه إلى الحبشة والمدينة',
        'شهوده بدرًا وأُحدًا والمشاهد كلّها',
        'استشهاده في وادي السباع',
      ],
      en: [
        'Being the first to draw a sword in Islam',
        'His two migrations to Abyssinia and Madinah',
        'Witnessing Badr, Uhud, and all the battles',
        'His martyrdom in the Valley of the Beasts',
      ],
    },
    lifespan: { ar: '٢٨ ق.هـ – ٣٦ هـ', en: 'c. 594 – 656 CE (36 AH)' },
  },

  {
    id: 'abdurrahman',
    order: 7,
    accent: 44,
    name: { ar: 'عبد الرحمن بن عوف', en: 'Abd al-Rahman ibn Awf' },
    title: { ar: 'التاجر الزاهد · باذل المال', en: 'The Ascetic Merchant · Giver of Wealth' },
    lineage: {
      ar: 'عبد الرحمن بن عوف بن عبد عوف الزُّهري القُرشي',
      en: 'ʿAbd al-Rahman ibn ʿAwf ibn ʿAbd ʿAwf, of the clan of Banu Zuhrah of Quraysh',
    },
    tagline: {
      ar: 'تاجرٌ باركه الله فبذل ماله كلّه',
      en: 'A merchant whom Allah blessed, who gave all his wealth',
    },
    summary: {
      ar: 'من السابقين الأوّلين، تاجرٌ باركه الله في تجارته فأنفق في سبيل الله أموالًا عظيمة، ومن أهل الشورى.',
      en: 'Among the earliest believers, a merchant blessed in his trade who spent vast wealth in the path of Allah, and a member of the consultative council.',
    },
    biography: {
      ar: [
        'عبد الرحمن بن عوف رضي الله عنه من السابقين الأوّلين إلى الإسلام، أسلم على يد أبي بكر الصِّدِّيق قبل دخول النبي ﷺ دار الأرقم. هاجر إلى الحبشة ثم إلى المدينة، وكان من أهل بدرٍ والمشاهد كلّها.',
        'لمّا آخى النبيُّ ﷺ بينه وبين سعد بن الربيع الأنصاري، عرض عليه سعدٌ أن يقاسمه ماله وأهله، فأبى عبد الرحمن وقال: «بارك الله لك في أهلك ومالك، دلّوني على السوق». فانطلق يتاجر حتى بارك الله له، فصار من أغنى الصحابة.',
        'كان مع غناه زاهدًا جوادًا، يبذل ماله في سبيل الله بذلًا عظيمًا؛ تصدّق مرّة بقافلةٍ بأحمالها، وأوقف وأعتق وأنفق على أمّهات المؤمنين، حتى قيل إنّه أوصى بأموالٍ عظيمة للمجاهدين وأهل بدر.',
        'اختاره عُمر من أهل الشورى الستّة، بل جعل إليه أمر اختيار الخليفة بعده، فاجتهد حتى بايع عثمان. تُوفّي رضي الله عنه سنة 32 للهجرة بالمدينة.',
      ],
      en: [
        'ʿAbd al-Rahman ibn ʿAwf (may Allah be pleased with him) was among the very first to accept Islam, embracing it at the hand of Abu Bakr al-Siddiq before the Prophet ﷺ entered the house of al-Arqam. He migrated to Abyssinia and then to Madinah, and was among the people of Badr and all the battles.',
        'When the Prophet ﷺ established brotherhood between him and Saʿd ibn al-Rabiʿ of the Ansar, Saʿd offered to share his wealth and family with him. ʿAbd al-Rahman declined, saying, "May Allah bless you in your family and wealth — just show me the market." He set to trade until Allah blessed him, and he became one of the wealthiest of the Companions.',
        'Despite his wealth he remained ascetic and generous, giving lavishly in the path of Allah: once he donated an entire caravan with all its loads; he established endowments, freed slaves, and provided for the Mothers of the Believers, leaving great bequests for the warriors and the people of Badr.',
        'ʿUmar chose him among the six of the council, and indeed entrusted him with selecting the next caliph; he laboured at this until he gave allegiance to ʿUthman. He died in 32 AH in Madinah.',
      ],
    },
    virtues: {
      ar: [
        'من السابقين الأوّلين إلى الإسلام',
        'هاجر الهجرتين وشهد بدرًا',
        'باركه الله في تجارته فبذل ماله العظيم',
        'من أهل الشورى الستّة',
        'صلّى النبيُّ ﷺ خلفه في غزوة تبوك',
      ],
      en: [
        'Among the very first to accept Islam',
        'Made both migrations and witnessed Badr',
        'Blessed in trade — he gave away vast wealth',
        'One of the six of the consultative council',
        'The Prophet ﷺ prayed behind him at Tabuk',
      ],
    },
    role: {
      ar: 'صحابيٌّ من السابقين وأهل الشورى، نموذجٌ في البذل والزهد مع الغنى.',
      en: 'A Companion among the earliest believers and the council, a model of giving and asceticism amid wealth.',
    },
    notableEvents: {
      ar: [
        'رفضه مقاسمة مال الأنصاري وطلبه السوق',
        'صدقاته العظيمة ومنها قافلة بأحمالها',
        'إمامته للنبي ﷺ في صلاةٍ بتبوك',
        'إدارته لأمر الشورى حتى بايع عثمان',
      ],
      en: [
        'Declining the Ansari’s wealth and asking only for the market',
        'His vast charities, including a full caravan',
        'Leading the Prophet ﷺ in a prayer at Tabuk',
        'Managing the council until allegiance was given to ʿUthman',
      ],
    },
    lifespan: { ar: '٤٤ ق.هـ – ٣٢ هـ', en: 'c. 580 – 652 CE (32 AH)' },
  },

  {
    id: 'saad',
    order: 8,
    accent: 46,
    name: { ar: 'سعد بن أبي وقّاص', en: 'Saʿd ibn Abi Waqqas' },
    title: { ar: 'أوّل من رمى بسهم · فاتح فارس', en: 'First to Shoot an Arrow · Conqueror of Persia' },
    lineage: {
      ar: 'سعد بن أبي وقّاص مالك بن أُهَيب الزُّهري القُرشي',
      en: 'Saʿd ibn Abi Waqqas Malik ibn Uhayb, of the clan of Banu Zuhrah of Quraysh',
    },
    tagline: {
      ar: 'مُستجاب الدعوة وأوّل من رمى بسهم في سبيل الله',
      en: 'One whose prayers were answered, first to shoot an arrow for Allah',
    },
    summary: {
      ar: 'خال النبي ﷺ من بني زهرة، أوّل من رمى بسهم في الإسلام، مُستجاب الدعوة، وفاتح بلاد فارس.',
      en: 'The Prophet’s ﷺ maternal uncle by clan, first to shoot an arrow in Islam, one whose supplications were answered, and conqueror of Persia.',
    },
    biography: {
      ar: [
        'سعد بن أبي وقّاص رضي الله عنه من السابقين الأوّلين، أسلم وهو ابن نحو سبع عشرة سنة، وكان يقول: «لقد رأيتني وأنا ثلث الإسلام». وهو من بني زهرة أخوال النبي ﷺ، فكان النبي ﷺ يفخر به ويقول: «هذا خالي، فليُرِني امرؤٌ خاله».',
        'كان أوّل من رمى بسهمٍ في سبيل الله، وأوّل من أُريق دمه في الإسلام في إحدى السرايا. وكان فارسًا شجاعًا رامياً ماهرًا، فدى النبيَّ ﷺ بسهامه يوم أُحد، وقال له النبي ﷺ: «ارمِ سعد، فداك أبي وأمّي».',
        'دعا له النبي ﷺ أن يُستجاب دعاؤه، فكان من المشهورين بإجابة الدعوة، يخافه الناس ويتّقون دعوته. قاده عُمر في فتح العراق، فكان القائد العام يوم القادسية التي كُسرت بها دولة فارس، ثم مصّر الكوفة.',
        'كان من أهل الشورى الستّة، واعتزل الفتنة فلم يدخل في القتال بين المسلمين. تُوفّي رضي الله عنه في قصره بالعقيق قرب المدينة سنة 55 للهجرة، وهو آخر العشرة المبشّرين وفاةً.',
      ],
      en: [
        'Saʿd ibn Abi Waqqas (may Allah be pleased with him) was among the very first believers, accepting Islam at about seventeen, and used to say, "I saw myself as a third of Islam." From Banu Zuhrah, the maternal kin of the Prophet ﷺ, the Prophet would take pride in him, saying, "This is my uncle — let any man show me his uncle!"',
        'He was the first to shoot an arrow in the path of Allah, and the first whose blood was shed for Islam in one of the early expeditions. A brave knight and a skilled archer, he defended the Prophet ﷺ with his arrows at Uhud, and the Prophet said to him, "Shoot, Saʿd — may my father and mother be ransom for you."',
        'The Prophet ﷺ prayed that his supplications be answered, and he became famed for answered prayers, so that people feared his invocation. ʿUmar appointed him to lead the conquest of Iraq, and he was the supreme commander at al-Qadisiyyah, by which the Persian empire was broken; he then founded the city of Kufa.',
        'He was among the six of the consultative council, and withdrew from the civil strife, never fighting among the Muslims. He died in his estate at al-ʿAqiq near Madinah in 55 AH — the last of the Ten Promised Paradise to pass away.',
      ],
    },
    virtues: {
      ar: [
        'أوّل من رمى بسهم في سبيل الله',
        'مُستجاب الدعوة بدعوة النبي ﷺ له',
        'خال النبي ﷺ من بني زهرة',
        'القائد العام يوم القادسية',
        'من أهل الشورى الستّة',
      ],
      en: [
        'First to shoot an arrow in the path of Allah',
        'His prayers were answered, by the Prophet’s ﷺ supplication',
        'The Prophet’s ﷺ maternal kinsman from Banu Zuhrah',
        'Supreme commander at al-Qadisiyyah',
        'One of the six of the consultative council',
      ],
    },
    role: {
      ar: 'قائدٌ فاتحٌ ومن السابقين، فاتح فارس ومؤسّس الكوفة، ومن أهل الشورى.',
      en: 'A conquering commander among the earliest believers, conqueror of Persia and founder of Kufa, and a member of the council.',
    },
    notableEvents: {
      ar: [
        'كونه أوّل من رمى بسهم في الإسلام',
        'بلاؤه ورميه يوم أُحد',
        'قيادته يوم القادسية وفتح فارس',
        'تأسيسه مدينة الكوفة',
      ],
      en: [
        'Being the first to shoot an arrow in Islam',
        'His valour and archery at Uhud',
        'His command at al-Qadisiyyah and the conquest of Persia',
        'His founding of the city of Kufa',
      ],
    },
    lifespan: { ar: '٢٣ ق.هـ – ٥٥ هـ', en: 'c. 600 – 674 CE (55 AH)' },
  },

  {
    id: 'said',
    order: 9,
    accent: 42,
    name: { ar: 'سعيد بن زيد', en: 'Saʿid ibn Zayd' },
    title: { ar: 'مُجاب الدعوة · من السابقين', en: 'Of Answered Prayer · Among the Earliest' },
    lineage: {
      ar: 'سعيد بن زيد بن عمرو بن نُفَيل العَدَوي القُرشي',
      en: 'Saʿid ibn Zayd ibn ʿAmr ibn Nufayl, of the clan of Banu ʿAdiyy of Quraysh',
    },
    tagline: {
      ar: 'ابن الحنيف الباحث عن التوحيد قبل البعثة',
      en: 'Son of the seeker of pure monotheism before the mission',
    },
    summary: {
      ar: 'من السابقين الأوّلين وابن عمّ عُمر وصهره، أسلم مبكرًا هو وزوجه فاطمة أخت عُمر، مُجاب الدعوة.',
      en: 'Among the earliest believers, cousin and brother-in-law of ʿUmar, who accepted Islam early with his wife Fatimah, ʿUmar’s sister — one whose prayer was answered.',
    },
    biography: {
      ar: [
        'سعيد بن زيد رضي الله عنه من السابقين الأوّلين إلى الإسلام، أسلم قبل أن يدخل النبيُّ ﷺ دار الأرقم، وهو ابن عمّ عُمر بن الخطّاب وزوج أخته فاطمة. وكان أبوه زيد بن عمرو بن نُفَيل من الحُنفاء الذين طلبوا دين إبراهيم ورفضوا عبادة الأصنام قبل البعثة.',
        'كان لإسلامه وزوجه فاطمة أثرٌ عظيم في إسلام عُمر؛ إذ دخل عليهما عُمر وهما يقرآن القرآن، فكان ذلك سببًا في هدايته ودخوله الإسلام.',
        'هاجر سعيدٌ إلى المدينة، وشهد المشاهد مع النبي ﷺ بعد بدرٍ التي فاتته لأنّه كان في مهمّةٍ بعثه فيها النبيُّ ﷺ، فضرب له النبيُّ ﷺ بسهمه وأجره، فعُدّ من أهل بدر. وكان من المجاهدين في فتوح الشام.',
        'اشتُهر بإجابة الدعوة، فقد ظُلم مرّةً في أرضٍ فدعا على الظالمة فاستجاب الله له. عاش زاهدًا ورِعًا، وتُوفّي رضي الله عنه بالعقيق قرب المدينة سنة 51 للهجرة، فحُمل ودُفن بالمدينة.',
      ],
      en: [
        'Saʿid ibn Zayd (may Allah be pleased with him) was among the very first to accept Islam, embracing it before the Prophet ﷺ entered the house of al-Arqam. He was the cousin of ʿUmar ibn al-Khattab and the husband of his sister Fatimah. His father, Zayd ibn ʿAmr ibn Nufayl, was among the hanifs who sought the religion of Abraham and rejected idol-worship before the mission.',
        'His Islam, together with that of his wife Fatimah, had a great effect on ʿUmar’s conversion: ʿUmar came upon them while they were reciting the Qur’an, and this became a cause of his guidance and entry into Islam.',
        'Saʿid migrated to Madinah and witnessed the battles with the Prophet ﷺ. He missed Badr itself, being away on a mission the Prophet ﷺ had sent him on, so the Prophet allotted him a share and reward and counted him among the people of Badr. He was a warrior in the conquests of Syria.',
        'He was famed for answered prayer: once wronged over a piece of land, he invoked Allah against the woman who wronged him and Allah answered him. He lived an ascetic, pious life and died at al-ʿAqiq near Madinah in 51 AH, then was carried and buried in Madinah.',
      ],
    },
    virtues: {
      ar: [
        'من السابقين الأوّلين إلى الإسلام',
        'كان إسلامه سببًا في هداية عُمر',
        'ابن الحنيف زيد بن عمرو طالب التوحيد',
        'مُجاب الدعوة معروفٌ باستجابة دعائه',
        'عُدّ من أهل بدر وضُرب له بسهمها',
      ],
      en: [
        'Among the very first to accept Islam',
        'His Islam was a cause of ʿUmar’s guidance',
        'Son of the hanif Zayd ibn ʿAmr, seeker of monotheism',
        'Known for answered prayer',
        'Counted among the people of Badr with a share allotted to him',
      ],
    },
    role: {
      ar: 'صحابيٌّ من السابقين، مجاهدٌ في فتوح الشام، ونموذجٌ في الورع والزهد.',
      en: 'A Companion among the earliest believers, a warrior in the conquests of Syria, and a model of piety and asceticism.',
    },
    notableEvents: {
      ar: [
        'إسلامه المبكّر مع زوجه فاطمة',
        'كونه سببًا في إسلام عُمر',
        'مشاركته في فتوح الشام',
        'استجابة دعائه حين ظُلم في أرضه',
      ],
      en: [
        'His early Islam alongside his wife Fatimah',
        'Being a cause of ʿUmar’s acceptance of Islam',
        'His part in the conquests of Syria',
        'The answering of his prayer when wronged over his land',
      ],
    },
    lifespan: { ar: '٢٢ ق.هـ – ٥١ هـ', en: 'c. 600 – 671 CE (51 AH)' },
  },

  {
    id: 'abu-ubayda',
    order: 10,
    accent: 47,
    name: { ar: 'أبو عُبيدة بن الجرّاح', en: 'Abu Ubaydah ibn al-Jarrah' },
    title: { ar: 'أمين هذه الأمّة', en: 'The Trustee of This Nation' },
    lineage: {
      ar: 'عامر بن عبد الله بن الجرّاح الفِهْري القُرشي',
      en: 'ʿAmir ibn ʿAbdullah ibn al-Jarrah, of the clan of Banu Fihr of Quraysh',
    },
    tagline: {
      ar: 'أمين هذه الأمّة بشهادة النبي ﷺ',
      en: 'The trustee of this nation by the Prophet’s ﷺ own testimony',
    },
    summary: {
      ar: 'أمين هذه الأمّة، من السابقين الأوّلين، قائدٌ فاتحٌ للشام، جمع بين القوّة والأمانة والتواضع.',
      en: 'The trustee of this nation, among the earliest believers, a conquering commander of Syria, uniting strength, trustworthiness, and humility.',
    },
    biography: {
      ar: [
        'أبو عُبيدة عامر بن الجرّاح رضي الله عنه من السابقين الأوّلين إلى الإسلام، أسلم على يد أبي بكر الصِّدِّيق في أوّل الدعوة. كان رجلًا نحيفًا طويلًا، حليمًا متواضعًا، شديدًا في أمر الله، جمع بين اللين والحزم.',
        'منحه النبيُّ ﷺ لقبًا خالدًا حين قال: «إنّ لكلّ أمّةٍ أمينًا، وإنّ أمين هذه الأمّة أبو عُبيدة بن الجرّاح». شهد بدرًا وأُحدًا والمشاهد كلّها، وثبت يوم أُحد مع النبي ﷺ، حتى نزع بأسنانه الحلقتين اللتين دخلتا في وجنتي النبي ﷺ من المِغفر، فسقطت ثنيّتاه.',
        'ولّاه عُمر قيادة جيوش الشام، فكان القائد العام في فتوحها العظيمة، وفتح الله على يديه دمشق وحمص وبيت المقدس وغيرها. وكان مع علوّ منصبه زاهدًا متواضعًا يعيش عيش الجند.',
        'لمّا وقع الطاعون في الشام (طاعون عَمَواس) أبى أن يفرّ بنفسه عن جنده، فأصابه الطاعون فاستُشهد به رضي الله عنه سنة 18 للهجرة، فبكاه عُمر وقال: «لو كنتُ مُستخلِفًا أحدًا ثم لقيتُ ربّي فسألني لقلت: استخلفتُ أمين الله ورسوله أبا عُبيدة بن الجرّاح».',
      ],
      en: [
        'Abu ʿUbaydah ʿAmir ibn al-Jarrah (may Allah be pleased with him) was among the very first to accept Islam, embracing it at the hand of Abu Bakr al-Siddiq at the dawn of the call. A slender, tall man — forbearing and humble, firm in the matter of Allah — he united gentleness with resolve.',
        'The Prophet ﷺ gave him an everlasting title, saying, "Every nation has a trustee, and the trustee of this nation is Abu ʿUbaydah ibn al-Jarrah." He witnessed Badr, Uhud, and every battle, standing firm at Uhud beside the Prophet ﷺ — even pulling out with his teeth the two rings of the helmet that had pierced the Prophet’s ﷺ cheeks, losing his own front teeth in doing so.',
        'ʿUmar appointed him commander of the armies of Syria, and he became the supreme commander in its great conquests; Allah granted through him the conquest of Damascus, Homs, Jerusalem, and more. Despite his lofty rank he remained ascetic and humble, living the life of an ordinary soldier.',
        'When the plague struck Syria (the Plague of ʿAmwas) he refused to flee and abandon his troops; the plague reached him and he was martyred by it in 18 AH. ʿUmar wept for him and said, "Were I to appoint a successor and then meet my Lord and He asked me, I would say: I appointed the trustee of Allah and His Messenger, Abu ʿUbaydah ibn al-Jarrah."',
      ],
    },
    virtues: {
      ar: [
        'أمين هذه الأمّة بشهادة النبي ﷺ',
        'من السابقين الأوّلين إلى الإسلام',
        'ثباته يوم أُحد ونزعه الحلقتين بأسنانه',
        'القائد العام لفتوح الشام',
        'جمع بين القيادة والزهد والتواضع',
      ],
      en: [
        'The trustee of this nation, by the Prophet’s ﷺ testimony',
        'Among the very first to accept Islam',
        'His steadfastness at Uhud, drawing the rings with his teeth',
        'Supreme commander of the conquests of Syria',
        'United leadership with asceticism and humility',
      ],
    },
    role: {
      ar: 'قائدٌ فاتحٌ للشام وأمينُ الأمّة، نموذجٌ في الأمانة والتواضع والثبات.',
      en: 'A conquering commander of Syria and the trustee of the nation, a model of trustworthiness, humility, and steadfastness.',
    },
    notableEvents: {
      ar: [
        'تسميته أمين الأمّة على لسان النبي ﷺ',
        'ثباته وفداؤه النبيَّ ﷺ يوم أُحد',
        'قيادته فتوح الشام وفتح بيت المقدس',
        'بقاؤه مع جنده في طاعون عَمَواس واستشهاده',
      ],
      en: [
        'Being named "trustee of the nation" by the Prophet ﷺ',
        'His steadfastness and sacrifice for the Prophet ﷺ at Uhud',
        'His command of the Syrian conquests and the taking of Jerusalem',
        'Remaining with his troops in the Plague of ʿAmwas and his martyrdom',
      ],
    },
    lifespan: { ar: '٤٠ ق.هـ – ١٨ هـ', en: 'c. 583 – 639 CE (18 AH)' },
  },
]

export const getCompanion = (id: string): Companion | undefined =>
  companions.find((c) => c.id === id)
