declare var Java: any;
import Authorization from '../../khttp/structures/authorization/Authorization.js'
import Boolean from '../../java/lang/Boolean.js'
import Class from '../../java/lang/Class.js'
import FileLike from '../../khttp/structures/files/FileLike.js'
import List from '../../java/util/List.js'
import Map from '../../java/util/Map.js'
import Object from '../../java/lang/Object.js'
import Request from './Request.js'
import String from '../../java/lang/String.js'

export default interface GenericRequest extends Object, Request {
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

export default class GenericRequest {
	public static get $javaClass(): any {
		return Java.type('khttp.requests.GenericRequest');
	}
	public static $isInstance(obj: any): obj is GenericRequest {
		return obj instanceof GenericRequest.$javaClass;
	}

	constructor(method: string, url: string, params: Map, headers: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean, stream: boolean, files: Array<any>, sslContext: any, hostnameVerifier: any);
	constructor(...args: any[]) {
		return new GenericRequest.$javaClass(...args);
	}

	public static access$getDEFAULT_DATA_HEADERS$cp(): Map;
	public static access$getDEFAULT_DATA_HEADERS$cp(...args: any[]): any {
		return GenericRequest.$javaClass.access$getDEFAULT_DATA_HEADERS$cp(...args);
	}

	public static access$getDEFAULT_FORM_HEADERS$cp(): Map;
	public static access$getDEFAULT_FORM_HEADERS$cp(...args: any[]): any {
		return GenericRequest.$javaClass.access$getDEFAULT_FORM_HEADERS$cp(...args);
	}

	public static access$getDEFAULT_HEADERS$cp(): Map;
	public static access$getDEFAULT_HEADERS$cp(...args: any[]): any {
		return GenericRequest.$javaClass.access$getDEFAULT_HEADERS$cp(...args);
	}

	public static access$getDEFAULT_JSON_HEADERS$cp(): Map;
	public static access$getDEFAULT_JSON_HEADERS$cp(...args: any[]): any {
		return GenericRequest.$javaClass.access$getDEFAULT_JSON_HEADERS$cp(...args);
	}

	public static access$getDEFAULT_UPLOAD_HEADERS$cp(): Map;
	public static access$getDEFAULT_UPLOAD_HEADERS$cp(...args: any[]): any {
		return GenericRequest.$javaClass.access$getDEFAULT_UPLOAD_HEADERS$cp(...args);
	}

}

