import React, { useState } from 'react'
import { DOGS_GET, IMAGES_BREED_GET, IMAGES_SUB_BREED_GET } from '../../api';
import useFetch from '../../hooks/useFetch';
import './index.scss'
import Loader from '../Loader';
import Error from '../ErrorMessage';


export default function Dogs() {

    const { loading, error, request } = useFetch();
    const [dogs, setDogs] = useState([]);
    const [loadingDogs, setLoadingDogs] = useState(true);

    React.useEffect(() => {
        getDogs();
    }, []);

    const getDogs = async () => {
        const { url, options } = DOGS_GET();
        const { response, json  } = await request(url, options); 
        let allDogs = [];
        console.log(response);
        if(response.ok){
            let dogsReq = json.message;
            for (const [breedName, subBreeds] of Object.entries(dogsReq)) {
                if (subBreeds.length > 0) {
                    for (const subBreed of subBreeds){
        
                        let name =subBreed  + ' ' + breedName;
                        let src =  await getSubBreedImage(breedName, subBreed);
                        
                         allDogs.push({name : name , src : src})
                    }
                }
                else{                   
                    let src =  await getBreedImage(breedName);
                    allDogs.push({name : breedName , src : src})
                }

            }
        }
        setLoadingDogs(false);
        setDogs(allDogs);
    }

    const getSubBreedImage = async (breed, subBreed) => {
        const { url, options } = IMAGES_SUB_BREED_GET(breed, subBreed);
        const { response, json  } = await request(url, options);    
        return response.ok ? json.message : "" ;    
    }

    const getBreedImage = async (breed) => {
        const { url, options } = IMAGES_BREED_GET(breed);
        const { response, json  } = await request(url, options);    
        return response.ok ? json.message : "" ;    
    }

    return (
        <div className="dogs">
            <Loader loading={loadingDogs} />
            <div className='title__container'>
                <h2 className='title__name'>Dog Breeds</h2>
            </div>
            {error === null ? (
                <div className="dogs__container">
                    {dogs.map((item, i) => {
                        return (
                            <div className='dog__card' key={item.name}>
                                <img className='dog__card__img' src={item.src} alt={item.name} />
                                <div className='name__container'>
                                    <span className='dog__name'>{item.name}</span>
                                </div>
                    
                            </div>
                        );
                    })

                    }
                </div>
            ) : (
                <Error />
            )}
            
        </div>
    )
}
