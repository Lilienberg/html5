var generateTable = function()
{
var tabell = ("<table border='1'> \n");
var cell = 0;
    for (i = 0; i < myArray.length; i++)
    {
        if (i === 0)
        {
            var currentCell = myArray[i];
        
            for (j = 0; j < currentCell.length; j++)
                {
                    tabell += "<th>\n";
                    // console.log(currentCell[j]);
                    tabell += currentCell[j];
                    tabell += "</th>\n";
                }
                tabell += "</tr>\n";  
        }
    
        else if (i % 2 === 0)
        {
            tabell += "<tr bgcolor='#99cc66'>\n";
            var currentCell = myArray[i];
        
            for (j = 0; j < currentCell.length; j++)
                {
                    tabell += "<td>\n";
                    // console.log(currentCell[j]);
                    tabell += currentCell[j];
                    tabell += "</td>\n";
                }
                tabell += "</tr>\n";
        } 
        else
        {
            var currentCell = myArray[i];
             tabell += "<tr>\n";
             for (j = 0; j < currentCell.length; j++)
            {
                tabell += "<td>\n";
                // console.log(currentCell[j]);
                tabell += currentCell[j];
                tabell += "</td>\n";
            }
                tabell += "</tr>\n";
        }
        
    }
    document.write(tabell);
}

