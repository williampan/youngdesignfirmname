var aList = `Figure
Welcome
Goodbye
Nowhere
Studio
Office
Field
Other
Another
Project
Projects
Interior
Empty
Blank
Past
Last
Next
First
Bureau
Somewhere
Someplace
Real
Fake
Temporary
Permanent
Outside
Formal
Informal
Variable
Exterior
Architecture
Free
Work
Standard
Central
Perimeter
New
Old
Organization
Young
Affiliates
Standard
Default
Neutral
Untitled
Outpost
Open
Future
Everything
Object
Elsewhere
After`.split('\n')

var bList = `Projects
Project
Studio
Office
Firm
Bureau
Architecture
Affiliates
Atelier
and Sons`.split('\n')

function generateName() { 
    var a = aList[Math.floor(Math.random() * aList.length)]
    var b = bList[Math.floor(Math.random() * bList.length)]

    document.getElementById('a').innerHTML = a 
    document.getElementById('b').innerHTML = b 
    
    document.getElementById('registration-link').setAttribute("href", 
            "http://www.namecheap.com/domains/registration/results.aspx?domain=" + a + " " + b)
}
