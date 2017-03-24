# xlsx-json
A script that will parse an Excel file with multiple sheets representing different entity types and create JSON file(s) for each entity. 
Each column being a unique attribute for an object defined by each row. Currently only handles two columns, but unlimited rows. 

To execute the script, you will need executable permission for the file. If you do not have the needed permission you may run:
chmod +x /path/to/your/xlsx-json.js. 

To then run the script:
node /path/to/your/xlsx-json.js. 

 **Node version:** 0.10.46  
 **Npm dependencies:**  
   - **excel version:** 0.1.7  
   - **jsonfile version:** ^2.4.0  
