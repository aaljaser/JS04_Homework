let logData = function()
     {for(let i=0;i<data.length;++i)
        {for(let key in data[i])
            {
                console.log(data[i][key])
            }
            //console.log()

        }
        let logNames = function(data) 
            {for(let i =0;i<data.length;i++)
                {
                console.log(data[i]["name"])
            }
            };let logNameEyes = function() 
            {for(let i =0;i<data.length;i++)
                {
                console.log(data[i]["name"]+"has "+data[i]["eye_color"])
            }

            };
            let logByMass = function() 
            {for(let i =0;i<data.length;i++)
                {let spotter = data[i]["name"]
                if(spotter.length>75){console.log(spotter)}
              
            }

            };

    }