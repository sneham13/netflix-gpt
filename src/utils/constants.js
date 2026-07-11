//harcoded urls- constants- make change in one place only


export const LOGIN_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/eaa165a3-80a7-44cb-8df6-be1a7e225369/web/IN-en-20260706-TRIFECTA-perspective_2f2fae68-6962-4d52-8cc2-1fe6ef5c6a56_large.jpg";

export const logo= "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAeuLioOK1ZSC8bQbffYbz1gZFxugAQdkx7UsMvqKDtFJLk3EWkpY-w8IBimYy_0xmg1aTzugh7JDHsGzv6hqIL9_qklFo-PFSH81MwCe9rokU4kGkdki.svg";

export const photoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPU5gJUj46ufL6FQfX3XvM7lR7qtcMy63tuj2siLuUQ&s=10";

export const api_options=
{method: 'GET', 
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDJmMWRjMjk2YzA5ZjAxNTlhMzJiYmVlOTRmNTYwNSIsIm5iZiI6MTc4MzY3NjEyMS42NjksInN1YiI6IjZhNTBiY2Q5MGFlNzg4ZjI4OTdhYWJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BN3k1FQaUk9BSa2_LJqk59S10fNEcRawkhZk7Zuh0oU'
    }
};

export const imgcdnUrl= "https://image.tmdb.org/t/p/w500";



export const open_api_key=process.env.REACT_APP_OPENAI_API_KEY;

export const gemini_api_key=process.env.REACT_APP_GEMINI_API_KEY;
//cd2f1dc296c09f0159a32bbee94f5605