{
    const Database = {
        testing : {
            tables : {
                persons:{
                    id:[1,2,3,4,5],
                    fname:["Harry","Bobby","Nancy","Mary","Leonardo"],
                    lname:["Smith","John","Christ","Miller","Canny"],
                    dob:["2003-10-01","2003-10-3","2004-9-5","2005-3-10","2000-12-30"]
                }
            }
        }
    }

    let Heading = Object.keys(Database.testing.tables.persons);
    let str ="";
    for(let i=0; i<Heading.length; i++){
        str += Heading[i] + " ";
    }
    console.log(str);
    let col;
    let rowNos= Database.testing.tables.persons.id.length;
    for(i=0;i<rowNos;i++){
        let id = Database.testing.tables.persons.id[i];
        let fname = Database.testing.tables.persons.fname[i];
        let lname = Database.testing.tables.persons.lname[i];
        let dob = Database.testing.tables.persons.dob[i];

        col = `${id}  ${fname}  ${lname}  ${dob}`;
        // String.raw();
        console.log(col);
        
        
    }
}