declare var Java: any;
import Charset from '../../java/nio/charset/Charset.js'
import CookieJar from '../../khttp/structures/cookie/CookieJar.js'
import InputStream from '../../java/io/InputStream.js'
import Iterator from '../../java/util/Iterator.js'
import List from '../../java/util/List.js'
import Map from '../../java/util/Map.js'
import Request from '../../khttp/requests/Request.js'
import String from '../../java/lang/String.js'

export default interface Response {
	contentIterator(arg0: number): Iterator;
	getConnection(): any;
	getContent(): Array<number>;
	getCookies(): CookieJar;
	getEncoding(): Charset;
	getHeaders(): Map;
	getHistory(): Array<Response>;
	getJsonArray(): any;
	getJsonObject(): any;
	getRaw(): InputStream;
	getRequest(): Request;
	getStatusCode(): number;
	getText(): string;
	getUrl(): string;
	lineIterator(arg0: number, arg1: Array<number>): Iterator;
	setEncoding(arg0: Charset): void;
}

export default class Response {
	public static get $javaClass(): any {
		return Java.type('khttp.responses.Response');
	}
	public static $isInstance(obj: any): obj is Response {
		return obj instanceof Response.$javaClass;
	}

}

