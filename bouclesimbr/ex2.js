for(let i=1; i<=3 ;i++)
{
    for(let j=1; j<=3-i ;j++)
    {
        process.stdout.write("_")  ;
    }
    for(let k=1; k<=(2*i-1);k++)
    {
            process.stdout.write(`${k}`); 
    }
    process.stdout.write("\n");
}