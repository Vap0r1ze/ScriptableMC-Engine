declare var Java: any;
import Class from '../../java/lang/Class.js'
import InputStream from '../../java/io/InputStream.js'
import OutputStream from '../../java/io/OutputStream.js'
import Reader from '../../java/io/Reader.js'
import String from '../../java/lang/String.js'
import Writer from '../../java/io/Writer.js'

export default interface SQLXML {
	free(): void;
	getBinaryStream(): InputStream;
	getCharacterStream(): Reader;
	getSource(arg0: Class): any;
	getString(): string;
	setBinaryStream(): OutputStream;
	setCharacterStream(): Writer;
	setResult(arg0: Class): any;
	setString(arg0: string): void;
}

export default class SQLXML {
	public static get $javaClass(): any {
		return Java.type('java.sql.SQLXML');
	}
	public static $isInstance(obj: any): obj is SQLXML {
		return obj instanceof SQLXML.$javaClass;
	}

}

