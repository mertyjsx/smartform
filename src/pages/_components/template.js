import { PDFDownloadLink, Document, Page ,View,StyleSheet,Text,PDFViewer,Font,} from '@react-pdf/renderer'
import React from "react"
import light from "../../assets/fonts/Merriweather-Light.ttf"
import bold from "../../assets/fonts/Merriweather-Regular.ttf"
import Robotolight from "../../assets/fonts/Roboto-Light.ttf"
Font.register({
  family: 'Merriweather-Light',
  fonts: [
    {
      src:light,
      fontWeight: 'light'
    },
  
  ]
})

Font.register({
  family: 'Merriweather-Bold',
  fonts: [
    {
      src:bold,
      fontWeight: 'bold'
    },
  
  ]
})
Font.register({
  family: 'Roboto',
  fonts: [
    {
      src:Robotolight,
      fontWeight: 'light'
    },
  
  ]
})

const Header=({first_name,middle_name,prefferred_name,last_name,adress,city,state,zip})=>(
<View style={{padding:"5% 5% 2% 5%",}}>
<Text style={{...styles.textalign,...styles.name}}>THOMAS RZEPECKI</Text>
<Text style={{...styles.normal,...styles.textalign}}>11 Whitby Circle •Lincolnshire, IL </Text>
<Text style={{...styles.normal,...styles.textalign}}>tomrzep1@comcast.net •(224) 944-7338</Text>
</View>

)
const JustLR=({left,right})=>(
<View style={styles.lmr_container}>
  <View style={styles.lmr_left}>
  <Text style={{textDecoration:"underline",...styles.bold12}}>{left}</Text>
  
 </View>

 <View style={styles.lmr_right}>
{right&&right.map(item=> <Text style={{...styles.normal}}>{item}</Text>)}
 

 </View>
 </View>
)
const LMR=({left_underline,left_normal,middle,middle2,right,middle_array})=>(
  <View style={styles.lmr_container}>
  <View style={styles.lmr_left}>
  <Text style={{textDecoration:"underline",...styles.bold12}}>{left_underline}</Text>
  
  {left_normal&&left_normal.map(item=> <Text style={{...styles.bold12}}>{item}
</Text>)}
 
 </View>

 <View style={styles.lmr_right}>
 <View style={styles.s_bet}>
  
     <View style={styles.w60} >
     <Text style={{...styles.bold12}}>{middle} </Text>
    
     <Text style={{...styles.bold12}}>{middle2} </Text>
   
     </View>
     
     <Text style={{...styles.bold12,...styles.w30}}>{right}</Text>
  
   
   

 </View>
 <View  style={styles.lmr_map}>
   {middle_array&&middle_array.map(item=><Text style={{...styles.normal}}>{item}</Text>)}
 
 
 
 
 </View>
 </View>
 
  </View>
  
  )


const MyDoc = () => (
    <Document>
    <Page style={styles.page}>
     <Header></Header>
     <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
     <JustLR left="OBJECTIVE" right={["To use my analytical and interpersonal skills in an exciting and challenging position"]}></JustLR>
  <LMR left_underline="EDUCATION"
   left_normal={[]}
    middle="UNIVERSITY OF MICHIGAN Ann Arbor,"
     middle2="College of Literature, Science, and the Arts "
  middle_array={["•Executive Board - Sigma Phi Epsilon Fraternity, Committee Chair - Circle K service organization","•Member – Michigan Business Club, Alpha Investments"]}
  right="September 2014 - April 2018"
  />
  <LMR left_underline="EXPERIENCE"
   left_normal={["July 2019 – Present"]}
    middle="W.W. Grainger"
     middle2="Financial Analyst - Supply Chain Finance "
  middle_array={["•Manage finances for 16 nationwide Distribution Centers in corporate FP&A role becoming subject matter expert in DC and Supply Chain operations","••	Perform routine reporting and analytical exercises, while coordinating insight-driven projects from identified opportunities with potential savings of $10M",
  "•	Budgeted $350M+ planned spending for 2020 using Zero Based Budgeting and other modeling, collaborated with VPs, DC Leaders, and multiple teams across the business"]}
  right="Lake Forest, IL"
  />
   <LMR
   left_normal={["August 2018 - July 2019"]}
    middle="W.W. Grainger"
     middle2="Financial Analyst - Supply Chain Finance "
  middle_array={["•	Provided financial support to $1B in sales through KeepStock and Services, counseled business partners and influenced sales strategy to achieve growth in revenue and margin",
 ]}
  right="Lake Forest, IL"
  />
  <LMR
   left_normal={["August 2018 - July 2019"]}
    middle="W.W. Grainger"
     middle2="Financial Analyst - Supply Chain Finance "
  middle_array={["•	Provided financial support to $1B in sales through KeepStock and Services, counseled business partners and influenced sales strategy to achieve growth in revenue and margin",
 ]}
  right="Lake Forest, IL"
  />
  <LMR
   left_normal={["August 2018 - July 2019"]}
    middle="W.W. Grainger"
     middle2="Financial Analyst - Supply Chain Finance "
  middle_array={["•	Provided financial support to $1B in sales through KeepStock and Services, counseled business partners and influenced sales strategy to achieve growth in revenue and margin",
 ]}
  right="Lake Forest, IL"
  />
   <JustLR left="SKILLS" right={["•	Fluent in Polish, Conversational in German and Spanish, Studied Latin for 2 years","•	Highly proficient in Microsoft Excel, PowerPoint, and Word"]}></JustLR>
   <JustLR left="INTERESTS" right={["•	Proud fan of Chicago sports teams, the Michigan Wolverines, and Liverpool FC"]}></JustLR>

 
    </Page>
  </Document>
)

const App = () => (
  <div>
    <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
  </div>
)

const PDF = () => (
    <PDFViewer style={{width:"100%",height:700}}>
      <MyDoc />
    </PDFViewer>
  );
  
export default PDF


const styles = StyleSheet.create({
    page: {
     
      padding:"6%"
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
  
    },
    textalign:{
        textAlign:"center",
        
    },
    times:{
        fontFamily: 'Times-Roman'
    },
    name:{ fontSize:14, fontFamily: 'Merriweather-Bold'},
    normal:{
        fontSize:10,fontFamily:"Roboto",fontWeight:"light"
    },
    
    bold12:{
      fontSize:11, fontFamily: 'Merriweather-Bold'
    },
    lmr_container:{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingTop:"2%",paddingBottom:"2%"},
    s_bet:{display:"flex",flexDirection:"row",justifyContent:"space-between"},
    lmr_left:{width:"16%"},
   w60:{width:"55%"},
   w30:{maxWidth:"40%"},
    lmr_right:{width:"80%"},
    lmr_map:{
     
    }

  });