package Utils;

import twitter4j.Twitter;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;
import twitter4j.conf.ConfigurationBuilder;

import Utils.Keys.*;
public class Utils {

    public String consumerKey;
    public String consumerSecret;
    public String accessToken;
    public String accessTokenSecret;

    public void login() throws TwitterException {
        ConfigurationBuilder cb = new ConfigurationBuilder();
        consumerKey = Keys.getConsumerKey();
        consumerSecret = Keys.getConsumerSecret();
        accessToken = Keys.getAccessToken();
        accessTokenSecret = Keys.getAccessTokenSecret();

        cb.setDebugEnabled(true).setOAuthConsumerKey(consumerKey).setOAuthConsumerSecret(consumerSecret).setOAuthAccessToken(accessToken).setOAuthAccessTokenSecret(accessTokenSecret);
        TwitterFactory tf = new TwitterFactory(cb.build());
        Twitter twitter = tf.getInstance();

        twitter.updateStatus("tweet");
    }
}
