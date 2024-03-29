import { Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react'

const AboutMe = () => {
  return (
    <Text>
      <Heading>אודותי</Heading>
      <p>כשאני נשאלת במה אני עוסקת למחייתי, יש לי תשובה קבועה: אנשים זקנים, זו ה"אהבה" שלי.</p>
      <p>לשמחתי, יש לי את הזכות לעסוק במה שאני אוהבת.</p>
      <br />
      <UnorderedList>
        <ListItem>בעלת תואר שני (M.A) בעבודה סוציאלית בהתמחות בבריאות, שיקום וזקנה.</ListItem>
        <ListItem>בוגרת לימודי "בריאות נפשית בזקנה" באוניברסיטת ברקלי, קליפורניה.</ListItem>
        <ListItem>בוגרת התכנית ללימודי לוגותרפיה - טיפול באמצעות מתן משמעות, אוניברסיטת ת"א.</ListItem>
      </UnorderedList>
      <br />
      <p>
        כיום אני העובדת הסוציאלית ומנהלת הקליניקה לזכויות זקנים וניצולי שואה באוניברסיטת בר אילן, בה אני מנחה סטודנטים
        במתן סיוע ויעוץ סוציאלי ומשפטי לאנשים בגיל הזקנה.
      </p>
      <p>
        בין תחומי ההתמחות שלי: מצבי בריאות יחודיים לזקנה, ירידה קוגניטיבית ודמנציה, התמודדות עם אבל ואבדן, עבודה עם
        משפחות ומטפלים עיקריים וכן ליווי וסיוע במצבי סוף החיים.
      </p>
      <br />
      <p>
        במשך שנים רבות בהן עבדתי במסגרות דיור שונות (בית אבות/דיור מוגן) היתה לי הזכות ללוות מקרוב מאות מבני הגיל השלישי
        אשר התמודדו עם אתגרי הגיל ואפשרו לי להיות שם עבורם, לרפד את "המכה" ולהקל על קושי, דרך החיבור האנושי המיוחד
        שרקמנו יחד.
      </p>
      <br />
      <p>
        מאחורי כמעט כל אדם מזדקן, ניצבת משפחה אשר באמצע שגרת החיים האינטנסיבית (גידול ילדים, נכדים, עבודה ועוד) פוגשת
        באתגרים ובסימני שאלה רבים סביב תהליך ההזדקנות או משבר שחווה ההורה. ה"סבך הבירוקרטי" עשוי להיות מתיש ומייסר
        ומצריך הצטרפות אל "תכנית לימודים חדשה", אליה רובנו לא נרשמנו.
      </p>
      <br />
      <p>
        ביודעי עד כמה המצב עשוי להיות רגיש ומורכב, וכן עד כמה אנשים כלל לא מודעים לזכויותיהם ולאפשרויות העומדות בפניהם –
        אני מציעה את שירותיי בקליניקה או בבית האדם/משפחתו. אשמח לעמוד לצידכם במסע המשפחתי והאישי ולהאיר עבורכם את הדרך.
      </p>
    </Text>
  )
}

export default AboutMe
