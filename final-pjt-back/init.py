import requests
import json

TMDB_API_KEY = 'f8b171aafccb0a97b02e46af402fb23f'

def get_movie_datas():
    total_data = []

    for i in range(1, 10):
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
                                'is_active' : True
                            }

                        data = {
                            "pk": movie['id'],
                            "model": "movies.movie",
                            "fields": fields
                        }

                        total_data.append(data)
                else:
                    if movie.get('release_date', ''):
                        if movie.get('backdrop_path', ''):
                            fields = {
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
                                'is_active' : False
                            }

                        data = {
                            "pk": movie['id'],
                            "model": "movies.movie",
                            "fields": fields
                        }

                        total_data.append(data)
        else:
            for movie in movies['results']:
                if movie.get('release_date', ''):
                    if movie.get('backdrop_path', ''):
                        fields = {
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
                            'is_active' : False
                        }

                    data = {
                        "pk": movie['id'],
                        "model": "movies.movie",
                        "fields": fields
                    }

                    total_data.append(data)
    
    for i in range(1, 20):
        request_url = f"https://api.themoviedb.org/3/movie/top_rated?api_key={TMDB_API_KEY}&language=ko-KR&page={i}"
        movies = requests.get(request_url).json()

        for movie in movies['results']:
            if movie.get('release_date', ''):
                if movie.get('backdrop_path', ''):
                    fields = {
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
                        'is_active' : False
                    }

                data = {
                    "pk": movie['id'],
                    "model": "movies.movie",
                    "fields": fields
                }

                total_data.append(data)
    
    with open("movies/fixtures/movie_data.json", "w", encoding="utf-8") as w:
        json.dump(total_data, w, indent=4, ensure_ascii=False)

def get_genre_data():
    total_data = []

    request_url = f"https://api.themoviedb.org/3/genre/movie/list?api_key={TMDB_API_KEY}"
    genres = requests.get(request_url).json()

    for genre in genres['genres']:
        fields = {
            # 'genre_id': genre['id'],
            'name': genre['name'],
        }

        data = {
            "pk": genre['id'],
            "model": "movies.genre",
            "fields": fields
        }
        total_data.append(data)

    with open("movies/fixtures/genre_data.json", "w", encoding="utf-8") as w:
        json.dump(total_data, w, indent=4, ensure_ascii=False)


get_movie_datas()
get_genre_data()

'''
movies/fixtures/ 만들고 실행
장르부터 먼저 실행 주의

python manage.py loaddata genre_data.json
python manage.py loaddata movie_data.json

'''