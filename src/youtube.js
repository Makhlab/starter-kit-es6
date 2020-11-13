export const initYouTube = () => {
    // console.log('init youtube module')


//--------------------------------STARTS dynamically load videos------------------------------------------------------------//

class GetYoutube {
 
async getTracks() {
		try {
			let result = await fetch('https://www.googleapis.com/youtube/v3/playlistItems');
			let data = await result.json();

			let tracks = data.items;
			tracks = tracks.map((i, item) => {
	

            const thumb = item.snippet.thumbnails
                && item.snippet.thumbnails.medium
                && item.snippet.thumbnails.medium.url;
            const title = item.snippet.title;
            const desc = item.snippet.description.substring(0, 80);
            const vid = item.snippet.resourceId.videoId;


				return { thumb, title, desc, vid};
			});
			return tracks;
		} catch (error) {
			console.log(error);
		}
	} 

}

const tracksDOM = document.querySelector(".main");
  

class UIYoutube {
  displayTracks(tracks) {

		let result = "";
		tracks.forEach((track) => {
			result += `
                <article class="dynamic-item" data-key="${vid}">
                    ${thumb ? `<img src="${thumb}" alt="" class="thumb">` : 'No thumb :('}
                    <div class="details">
                        <h4>${title}</h4>
                        <p>${desc}</p>
                    </div>
                </article>
            `;
		});
		tracksDOM.innerHTML = result;
	};
};
//-------------------------------------ENDS dynamically load videos---------------------------------------------//

//-----------------------------------Main Video starts-----------------------------------------
   
class mainVideo {

constructor (__playlsitIds){
        this.playlistIds =_playlsitIds;
        }

_playlistIds.forEach((playlistId, index) => {
    
        const options = {
            part: 'snippet',
            key,
            maxResults: 10,
            playlistId,
        }

        $.getJSON(URL, options, function (data) { // fetching data for the current playlistId in the loop
            console.log(data)
            var selectedId = data.items[0].snippet.resourceId.videoId;

            if (index === 0) { // only first video from the first playlist 
                mainVid(selectedId);
            }

            resultsLoop(data);
        });

    })
}

let myPlaylistId1 = new mainVideo(['PLgzzP3MlhAE7gBY6jl3wHCVzVyx_9ooel','PLgzzP3MlhAE4MGcZloJ9hq5RTfH3yiGLf'])



mainVid(id) {
        $('#video').html(`
            <iframe src="https://youtube.com/embed/${id}"
                    frameborder="0" allow="encrypted-media"
                    allowfullscreen
            />
        `);
    }
$('main').on('click', 'article', function () {
        const id = $(this).attr('data-key');
        mainVid(id);
    });
  
//   const key = 'AIzaSyAhXsI7zcjNA8-pT7_t2qOkaxBBJjYLj0c';
// 	const channelID = 'UCGpNU4va0WLaG1RAcC2Np9w';
//   const playlistIds = ['PLgzzP3MlhAE7gBY6jl3wHCVzVyx_9ooel','PLgzzP3MlhAE4MGcZloJ9hq5RTfH3yiGLf', 'PLgzzP3MlhAE5V0Akq64vBR0dafbZU5mTI','PLgzzP3MlhAE5vPvJM-yjKNLKmVfbiTtSR','PLgzzP3MlhAE46hyJ7AfJ0EaZ-VpheG0Eu','PLgzzP3MlhAE6ZZNEQi_0Gcwm0sEJ4TAPB','PLgzzP3MlhAE6Qw56_UJW3OxsmlVkTs5mk','PLgzzP3MlhAE7PnCgjfOsKBMRJ9iT0gpJ6','PLgzzP3MlhAE6fvSg0XcI7aPEMCN088XrX','PLgzzP3MlhAE527vUfktrQz9TmLdwDzqWf','PLgzzP3MlhAE5V0Akq64vBR0dafbZU5mTI']
//   const URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

    
//---iterate through playlisId array ends
	

// });








