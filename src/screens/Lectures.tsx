import { Heading, List, ListItem } from '@chakra-ui/react'

const Lectures = () => {
  return (
    <>
      <Heading>הרצאות</Heading>
      <br />
      <Heading size='md'>הרצאות לצוותים/אנשי מקצוע/מטפלים עיקריים</Heading>
      <List styleType='' px='20px'>
        <ListItem>
          ירידה קוגנטיבית/דמנציה – הסבר אודות שלבי המחלה, התמודדות עם התנהגויות מאתגרות, התערבויות טיפוליות ומשפחתיות.
        </ListItem>
        <ListItem>חשיבות העבודה המשותפת עם המטפלים הזרים – בבית ובדיור המוגן.</ListItem>
        <ListItem>
          הדרכות למטפלים זרים בנושאים הקשורים לזקנה, דמנציה, טיפול הוליסטי באדם המזדקן/ניצול שואה, עיבוד אבל לאחר אובדן
          המטופל.
        </ListItem>
        <ListItem>
          הכנה טובה לזיקנה – משימות ודגשים לבני הגיל השלישי ובני משפחתם בכל הקשור לתכנון משפטי, רפואי וסוציאלי בתקופת
          ההזדקנות.
        </ListItem>
      </List>
    </>
  )
}

export default Lectures
