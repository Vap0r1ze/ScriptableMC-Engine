declare var Java: any;
import Charset from '../../java/nio/charset/Charset.js'
import Class from '../../java/lang/Class.js'
import CookieJar from '../../khttp/structures/cookie/CookieJar.js'
import InputStream from '../../java/io/InputStream.js'
import Iterator from '../../java/util/Iterator.js'
import List from '../../java/util/List.js'
import Map from '../../java/util/Map.js'
import Object from '../../java/lang/Object.js'
import Request from '../../khttp/requests/Request.js'
import Response from './Response.js'
import String from '../../java/lang/String.js'

export default interface GenericResponse extends Object, Response {
	contentIterator(chunkSize: number): Iterator;
	getConnection(): any;
	getContent(): Array<number>;
	getCookies(): CookieJar;
	getEncoding(): Charset;
	getHeaders(): Map;
	getHistory(): Array<Response>;
	getInitializers(): Array<any>;
	getJsonArray(): any;
	getJsonObject(): any;
	getRaw(): InputStream;
	getRequest(): Request;
	getStatusCode(): number;
	getText(): string;
	getUrl(): string;
	lineIterator(chunkSize: number, delimiter: Array<number>): Iterator;
	setEncoding(value: Charset): void;
}

export default class GenericResponse {
	public static get $javaClass(): any {
		return Java.type('khttp.responses.GenericResponse');
	}
	public static $isInstance(obj: any): obj is GenericResponse {
		return obj instanceof GenericResponse.$javaClass;
	}

	constructor(request: Request);
	constructor(...args: any[]) {
		return new GenericResponse.$javaClass(...args);
	}

	public static access$getDefaultEndInitializers$cp(): Array<any>;
	public static access$getDefaultEndInitializers$cp(...args: any[]): any {
		return GenericResponse.$javaClass.access$getDefaultEndInitializers$cp(...args);
	}

	public static access$getDefaultStartInitializers$cp(): Array<any>;
	public static access$getDefaultStartInitializers$cp(...args: any[]): any {
		return GenericResponse.$javaClass.access$getDefaultStartInitializers$cp(...args);
	}

	public static access$get_cookies$p($this: GenericResponse): CookieJar;
	public static access$get_cookies$p(...args: any[]): any {
		return GenericResponse.$javaClass.access$get_cookies$p(...args);
	}

}

