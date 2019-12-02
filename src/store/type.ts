import ace from "brace";

export interface StdoutType {
  text: string;
  component?: "alert" | "json";
  data?: Object;
  type?: "success" | "info" | "warning" | "error";
  description?: string;
}

export interface EditorStore {
  fileManager: {
    curDir: string;
    curFilePath: string;
    file?: { path: string; name: string; content: string };
    files: {
      [key: string]: EditorStore["fileManager"]["file"];
    };
    defaultFiles: { path: string; content: string; ensure: boolean }[];
  };
  ace: {
    content: string;
    editor: ace.Editor;
    theme: string;
    lang: string;
    options: any;
  };
  solc: {
    version: string;
    loading: boolean;
    compileLoading: boolean;
    compiler: any;
    versions: {
      all: string[];
      nightly: string[];
      releases: string[];
    };
    compileResult: Record<string, CompiledContract>;
    currentContract: any;
  };
}

export type CompiledContract = {
  abi: {
    constant: boolean;
    inputs: {
      name: string;
      type: string;
    }[];
    outpus: {
      name: string;
      type: string;
    }[];
    name: string;
    payable: boolean;
    stateMutability: string;
    type: string;
  }[];
  assembly: Object;
  binary: Object;
  compiler: Object;
  metadata: Object;
  name: string;
  sources: Object;
};
