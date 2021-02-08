declare var Java: any;
import Authorization from '../../../khttp/structures/authorization/Authorization.js'
import Boolean from '../../../java/lang/Boolean.js'
import Class from '../../../java/lang/Class.js'
import List from '../../../java/util/List.js'
import Map from '../../../java/util/Map.js'
import Object from '../../../java/lang/Object.js'
import Response from '../../../khttp/responses/Response.js'
import String from '../../../java/lang/String.js'

export default class Http {
	public static get $javaClass(): any {
		return Java.type('com.smc.utils.Http');
	}
	public static $isInstance(obj: any): obj is Http {
		return obj instanceof Http.$javaClass;
	}

	public static delete(url: string): Response;
	public static delete(url: string, headers: Map): Response;
	public static delete(url: string, headers: Map, params: Map): Response;
	public static delete(url: string, headers: Map, params: Map, data: Object): Response;
	public static delete(url: string, headers: Map, params: Map, data: Object, json: Object): Response;
	public static delete(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization): Response;
	public static delete(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map): Response;
	public static delete(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number): Response;
	public static delete(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean): Response;
	public static delete(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean, stream: boolean): Response;
	public static delete(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean, stream: boolean, files: Array<any>): Response;
	public static delete(...args: any[]): any {
		return Http.$javaClass.delete(...args);
	}

	public static get(url: string): Response;
	public static get(url: string, headers: Map): Response;
	public static get(url: string, headers: Map, params: Map): Response;
	public static get(url: string, headers: Map, params: Map, data: Object): Response;
	public static get(url: string, headers: Map, params: Map, data: Object, json: Object): Response;
	public static get(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization): Response;
	public static get(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map): Response;
	public static get(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number): Response;
	public static get(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean): Response;
	public static get(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean, stream: boolean): Response;
	public static get(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean, stream: boolean, files: Array<any>): Response;
	public static get(...args: any[]): any {
		return Http.$javaClass.get(...args);
	}

	public static head(url: string): Response;
	public static head(url: string, headers: Map): Response;
	public static head(url: string, headers: Map, params: Map): Response;
	public static head(url: string, headers: Map, params: Map, data: Object): Response;
	public static head(url: string, headers: Map, params: Map, data: Object, json: Object): Response;
	public static head(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization): Response;
	public static head(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map): Response;
	public static head(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number): Response;
	public static head(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean): Response;
	public static head(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean, stream: boolean): Response;
	public static head(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean, stream: boolean, files: Array<any>): Response;
	public static head(...args: any[]): any {
		return Http.$javaClass.head(...args);
	}

	public static options(url: string): Response;
	public static options(url: string, headers: Map): Response;
	public static options(url: string, headers: Map, params: Map): Response;
	public static options(url: string, headers: Map, params: Map, data: Object): Response;
	public static options(url: string, headers: Map, params: Map, data: Object, json: Object): Response;
	public static options(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization): Response;
	public static options(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map): Response;
	public static options(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number): Response;
	public static options(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean): Response;
	public static options(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean, stream: boolean): Response;
	public static options(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean, stream: boolean, files: Array<any>): Response;
	public static options(...args: any[]): any {
		return Http.$javaClass.options(...args);
	}

	public static patch(url: string): Response;
	public static patch(url: string, headers: Map): Response;
	public static patch(url: string, headers: Map, params: Map): Response;
	public static patch(url: string, headers: Map, params: Map, data: Object): Response;
	public static patch(url: string, headers: Map, params: Map, data: Object, json: Object): Response;
	public static patch(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization): Response;
	public static patch(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map): Response;
	public static patch(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number): Response;
	public static patch(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean): Response;
	public static patch(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean, stream: boolean): Response;
	public static patch(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean, stream: boolean, files: Array<any>): Response;
	public static patch(...args: any[]): any {
		return Http.$javaClass.patch(...args);
	}

	public static post(url: string): Response;
	public static post(url: string, headers: Map): Response;
	public static post(url: string, headers: Map, params: Map): Response;
	public static post(url: string, headers: Map, params: Map, data: Object): Response;
	public static post(url: string, headers: Map, params: Map, data: Object, json: Object): Response;
	public static post(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization): Response;
	public static post(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map): Response;
	public static post(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number): Response;
	public static post(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean): Response;
	public static post(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean, stream: boolean): Response;
	public static post(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean, stream: boolean, files: Array<any>): Response;
	public static post(...args: any[]): any {
		return Http.$javaClass.post(...args);
	}

	public static put(url: string): Response;
	public static put(url: string, headers: Map): Response;
	public static put(url: string, headers: Map, params: Map): Response;
	public static put(url: string, headers: Map, params: Map, data: Object): Response;
	public static put(url: string, headers: Map, params: Map, data: Object, json: Object): Response;
	public static put(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization): Response;
	public static put(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map): Response;
	public static put(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number): Response;
	public static put(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean): Response;
	public static put(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean, stream: boolean): Response;
	public static put(url: string, headers: Map, params: Map, data: Object, json: Object, auth: Authorization, cookies: Map, timeout: number, allowRedirects: boolean, stream: boolean, files: Array<any>): Response;
	public static put(...args: any[]): any {
		return Http.$javaClass.put(...args);
	}

}

