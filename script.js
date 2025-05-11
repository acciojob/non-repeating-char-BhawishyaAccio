function firstNonRepeatedChar(str) {
let ans=null;
for(let i=0;i<ans.length-1;i++)
	{
	    for(j=i+1;j<ans.length;j++)
			{
				if(str[i]!=str[j])
				{
					ans=str[i];
					break;
				}
			}
		if(str!=null)
		{
			break;
		}
	}

return ans;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
