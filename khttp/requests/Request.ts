declare var Java: any;
import Authorization from '../../khttp/structures/authorization/Authorization.js'
import FileLike from '../../khttp/structures/files/FileLike.js'
import List from '../../java/util/List.js'
import Map from '../../java/util/Map.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Request {
	getAllowRedirects(): boolean;
	getAuth(): Authorization;
	getBody(): Array<number>;
	getCookies(): Map;
	getData(): Object;
	getFiles(): Array<FileLike>;
	getHeaders(): Map;
	getHostnameVerifier(): any;
	getJson(): Object;
	getMethod(): string;
	getParams(): Map;
	getSslContext(): any;
	getStream(): boolean;
	getTimeout(): number;
	getUrl(): string;
}

export default class Request {
	public static get $javaClass(): any {
		return Java.type('khttp.requests.Request');
	}
	public static $isInstance(obj: any): obj is Request {
		return obj instanceof Request.$javaClass;
	}

}

