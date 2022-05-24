import requests
import json


TMDB_API_KEY = 'f8b171aafccb0a97b02e46af402fb23f'

def get_movie_datas():
    total_data = []
    genres = [
    {
    "id": 28,
    "name": "액션"
    },
    {
    "id": 12,
    "name": "모험"
    },
    {
    "id": 16,
    "name": "애니메이션"
    },
    {
    "id": 35,
    "name": "코메디"
    },
    {
    "id": 80,
    "name": "범죄"
    },
    {
    "id": 99,
    "name": "다큐멘터리"
    },
    {
    "id": 18,
    "name": "드라마"
    },
    {
    "id": 10751,
    "name": "가족"
    },
    {
    "id": 14,
    "name": "판타지"
    },
    {
    "id": 36,
    "name": "역사"
    },
    {
    "id": 27,
    "name": "공포"
    },
    {
    "id": 10402,
    "name": "음악"
    },
    {
    "id": 9648,
    "name": "미스테리"
    },
    {
    "id": 10749,
    "name": "로멘스"
    },
    {
    "id": 878,
    "name": "공상과학"
    },
    {
    "id": 10770,
    "name": "티비영화"
    },
    {
    "id": 53,
    "name": "스릴러"
    },
    {
    "id": 10752,
    "name": "전쟁"
    },
    {
    "id": 37,
    "name": "서부"
    }
    ]

    for i in range(1, 20):
        request_url = f"https://api.themoviedb.org/3/movie/popular?api_key={TMDB_API_KEY}&language=ko-KR&page={i}"
        movies = requests.get(request_url).json()
        if i == 1:
            j = 0
            for movie in movies['results']:
                if j <= 10:
                    j += 1
                    if movie.get('release_date', ''):
                        if movie.get('backdrop_path', ''):
                            fields = {
                                "pk": movie['id'],
                                'adult' : movie['adult'],
                                'backdrop_path' : movie['backdrop_path'],
                                'original_language' : movie['original_language'],
                                'overview' : movie['overview'],
                                'popularity': movie['popularity'],
                                'poster_path': movie['poster_path'],
                                'released_date': movie['release_date'],
                                'title': movie['title'],
                                'vote_average': movie['vote_average'],
                                'genres': movie['genre_ids'],
                                'is_active' : True,
                                'director': '',
                                'actors': [],
                            }
                        for dic_moive in genres:
                            for i in range(len(fields.get('genres'))):
                                # 딕서너리 내에서 id 값이 같은 값들만 찾아 genre네임 확보
                                if dic_moive['id'] == fields.get('genres')[i]:
                                    fields.get('genres')[i] = dic_moive['name']

                        total_data.append(fields)
                else:
                    if movie.get('release_date', ''):
                        if movie.get('backdrop_path', ''):
                            fields = {
                                "pk": movie['id'],
                                'adult' : movie['adult'],
                                'backdrop_path' : movie['backdrop_path'],
                                'original_language' : movie['original_language'],
                                'overview' : movie['overview'],
                                'popularity': movie['popularity'],
                                'poster_path': movie['poster_path'],
                                'released_date': movie['release_date'],
                                'title': movie['title'],
                                'vote_average': movie['vote_average'],
                                'genres': movie['genre_ids'],
                                'is_active' : False,
                                'director': '',
                                'actors': [],
                            }
                        for dic_moive in genres:
                            for i in range(len(fields.get('genres'))):
                                # 딕서너리 내에서 id 값이 같은 값들만 찾아 genre네임 확보
                                if dic_moive['id'] == fields.get('genres')[i]:
                                    fields.get('genres')[i] = dic_moive['name']

                        total_data.append(fields)
        else:
            for movie in movies['results']:
                if movie.get('release_date', ''):
                    if movie.get('backdrop_path', ''):
                        fields = {
                            "pk": movie['id'],
                            'adult' : movie['adult'],
                            'backdrop_path' : movie['backdrop_path'],
                            'original_language' : movie['original_language'],
                            'overview' : movie['overview'],
                            'popularity': movie['popularity'],
                            'poster_path': movie['poster_path'],
                            'released_date': movie['release_date'],
                            'title': movie['title'],
                            'vote_average': movie['vote_average'],
                            'genres': movie['genre_ids'],
                            'is_active' : False,
                            'director': '',
                            'actors': [],
                        }
                    for dic_moive in genres:
                        for i in range(len(fields.get('genres'))):
                            # 딕서너리 내에서 id 값이 같은 값들만 찾아 genre네임 확보
                            if dic_moive['id'] == fields.get('genres')[i]:
                                fields.get('genres')[i] = dic_moive['name']

                    total_data.append(fields)
    
    for i in range(1, 30):
        request_url = f"https://api.themoviedb.org/3/movie/top_rated?api_key={TMDB_API_KEY}&language=ko-KR&page={i}"
        movies = requests.get(request_url).json()

        for movie in movies['results']:
            if movie.get('release_date', ''):
                if movie.get('backdrop_path', ''):
                    fields = {
                        "pk": movie['id'],
                        'adult' : movie['adult'],
                        'backdrop_path' : movie['backdrop_path'],
                        'original_language' : movie['original_language'],
                        'overview' : movie['overview'],
                        'popularity': movie['popularity'],
                        'poster_path': movie['poster_path'],
                        'released_date': movie['release_date'],
                        'title': movie['title'],
                        'vote_average': movie['vote_average'],
                        'genres': movie['genre_ids'],
                        'is_active' : False,
                        'director': '',
                        'actors': [],
                    }
                for dic_moive in genres:
                    for i in range(len(fields.get('genres'))):
                        # 딕서너리 내에서 id 값이 같은 값들만 찾아 genre네임 확보
                        if dic_moive['id'] == fields.get('genres')[i]:
                            fields.get('genres')[i] = dic_moive['name']

                total_data.append(fields)

    for data in total_data:
        movie_id = data['pk']
        
        credit_request_url = f"https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key={TMDB_API_KEY}"
        credit_info = requests.get(credit_request_url).json()

        # 배우는 최대 10명까지만 저장한다.
        for cast in credit_info['cast'][:5]:
            data['actors'].append(cast['name'])
        
        if credit_info['crew']:
            data['director'] = credit_info['crew'][0]['name']
    
    with open("movies/fixtures/movies_practice.json", "w", encoding="utf-8") as w:
        json.dump(total_data, w, indent=4, ensure_ascii=False)


get_movie_datas()

'''
movies/fixtures/ 만들고 실행
장르부터 먼저 실행 주의

python manage.py loaddata genre_data.json
python manage.py loaddata movie_data.json

'''