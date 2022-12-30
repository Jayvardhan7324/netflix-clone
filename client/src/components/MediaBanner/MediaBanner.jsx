import { useWindowSize } from '../../hooks';
import { baseImageUrlLink, baseImageUrl, formatDate, calculateRuntime } from '../../utils';

export const MediaBanner = ({ media }) => {
    const _window = useWindowSize();
    let queryValue =
        media?.data?.name ||
        media?.data?.original_name ||
        media?.data?.title ||
        media?.data?.original_title;
    let query = queryValue?.toLowerCase().split(' ').join('+');

    return (
        <div
            className='detailedPage_banner'
            style={{
                background: `linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6), #0e0e0e), url(${baseImageUrlLink(
                    'original'
                )}/${
                    _window?.width <= 768
                        ? media?.data?.poster_path
                        : media?.data?.backdrop_path || media?.data?.poster_path
                })`,
            }}
        >
            <div className='detailedPage_banner_content'>
                <div className='detailedPage_banner_content_poster_image'>
                    {baseImageUrl(
                        'original',
                        media?.data?.poster_path || media?.data?.backdrop_path,
                        queryValue,
                        'detailedPage_banner_content_posterimage'
                    )}
                    <a
                        className='movie_trailer'
                        target='_blank'
                        rel='noreferrer'
                        href={`https://youtube.com/results?search_query=${query}+official+trailer`}
                    >
                        watch trailer
                    </a>
                </div>
                <div className='detailedPage_banner_content_details'>
                    <h1>
                        {queryValue}
                        {/* {media?.data?.release_date !== '' &&
                            ` (${formatDate('YYYY', media?.data?.release_date)})`} */}
                        {_window?.width > 768 &&
                            calculateRuntime(
                                media?.data?.runtime ||
                                    media?.data?.episode_run_time?.[0] ||
                                    media?.data?.last_episode_to_air?.runtime
                            )}
                        {media?.data?.adult && <span className='adult'>A</span>}
                    </h1>
                    <div className='genre_container'>
                        {media?.data?.genres?.map((genre) => (
                            <p className='genre'>{genre.name}</p>
                        ))}
                    </div>
                    <p className='overview_text'>{media?.data?.overview}</p>
                    {_window?.width > 1024 && media?.data?.production_companies.length > 1 && (
                        <div className='creators'>
                            <h2>Production Companies</h2>
                            <div className='creators_container'>
                                {media?.data?.production_companies?.map((company) => (
                                    <div className='creator'>
                                        <p>{company?.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='fadeElement'></div>
        </div>
    );
};
