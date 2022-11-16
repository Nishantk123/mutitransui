import axios from "axios";
import React, { Component } from "react";
import download from "downloadjs";

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      lang: "",
      dataInCSV:"",
      loading: false,
      yo:"UI"
    };
  }
  handleFile = (e) => {
    this.setState({ file: e.target.files[0] });
  };
  handlesubmit = () => {
    let formdata = new FormData();
    formdata.append("file", this.state.file);
    formdata.append("lang", this.state.lang);
    this.setState({loading: true, yo:90})
    axios({
      url: "http://127.0.0.1:8000/user",
      method: "post",
      data: formdata,
    })
    .then(res => {
      download(res.data, "texto.csv", "text/csv")
      this.setState({loading: false})
    })
    .catch(err=>{
      this.setState({loading: false})
    })
  };
  render() {
  console.log(this.state.loading)
  console.log(this.state.yo)
  let LANGUAGES = {
    'af': 'afrikaans',
    'sq': 'albanian',
    'am': 'amharic',
    'ar': 'arabic',
    'hy': 'armenian',
    'az': 'azerbaijani',
    'eu': 'basque',
    'be': 'belarusian',
    'bn': 'bengali',
    'bs': 'bosnian',
    'bg': 'bulgarian',
    'ca': 'catalan',
    'ceb': 'cebuano',
    'ny': 'chichewa',
    'zh-cn': 'chinese (simplified)',
    'zh-tw': 'chinese (traditional)',
    'co': 'corsican',
    'hr': 'croatian',
    'cs': 'czech',
    'da': 'danish',
    'nl': 'dutch',
    'en': 'english',
    'eo': 'esperanto',
    'et': 'estonian',
    'tl': 'filipino',
    'fi': 'finnish',
    'fr': 'french',
    'fy': 'frisian',
    'gl': 'galician',
    'ka': 'georgian',
    'de': 'german',
    'el': 'greek',
    'gu': 'gujarati',
    'ht': 'haitian creole',
    'ha': 'hausa',
    'haw': 'hawaiian',
    'iw': 'hebrew',
    'he': 'hebrew',
    'hi': 'hindi',
    'hmn': 'hmong',
    'hu': 'hungarian',
    'is': 'icelandic',
    'ig': 'igbo',
    'id': 'indonesian',
    'ga': 'irish',
    'it': 'italian',
    'ja': 'japanese',
    'jw': 'javanese',
    'kn': 'kannada',
    'kk': 'kazakh',
    'km': 'khmer',
    'ko': 'korean',
    'ku': 'kurdish (kurmanji)',
    'ky': 'kyrgyz',
    'lo': 'lao',
    'la': 'latin',
    'lv': 'latvian',
    'lt': 'lithuanian',
    'lb': 'luxembourgish',
    'mk': 'macedonian',
    'mg': 'malagasy',
    'ms': 'malay',
    'ml': 'malayalam',
    'mt': 'maltese',
    'mi': 'maori',
    'mr': 'marathi',
    'mn': 'mongolian',
    'my': 'myanmar (burmese)',
    'ne': 'nepali',
    'no': 'norwegian',
    'or': 'odia',
    'ps': 'pashto',
    'fa': 'persian',
    'pl': 'polish',
    'pt': 'portuguese',
    'pa': 'punjabi',
    'ro': 'romanian',
    'ru': 'russian',
    'sm': 'samoan',
    'gd': 'scots gaelic',
    'sr': 'serbian',
    'st': 'sesotho',
    'sn': 'shona',
    'sd': 'sindhi',
    'si': 'sinhala',
    'sk': 'slovak',
    'sl': 'slovenian',
    'so': 'somali',
    'es': 'spanish',
    'su': 'sundanese',
    'sw': 'swahili',
    'sv': 'swedish',
    'tg': 'tajik',
    'ta': 'tamil',
    'te': 'telugu',
    'th': 'thai',
    'tr': 'turkish',
    'uk': 'ukrainian',
    'ur': 'urdu',
    'ug': 'uyghur',
    'uz': 'uzbek',
    'vi': 'vietnamese',
    'cy': 'welsh',
    'xh': 'xhosa',
    'yi': 'yiddish',
    'yo': 'yoruba',
    'zu': 'zulu'
  }

  let lang_key = Object.keys(LANGUAGES)
  console.log(lang_key);
    return (
      <div className="card w-50 mx-auto my-3 bg-info p-3">
        <h3>file upload</h3>
        <input
          type="file"
          className="my-3 form-control"
          onChange={(e) => this.handleFile(e)}
        />
        <select
          className="my-3 form-control"
          onChange={(e) => this.setState({ lang: e.target.value })}
        >
          <option>select</option>
          {
            lang_key.map((data, index)=>{
              return(
                <option  key={index} value={data}>{LANGUAGES[data]}</option>
              )
            })
          }

        </select>
        {/* <input
          className="my-3 form-control"
          value={this.state.lang}
          onChange={(e) => this.setState({ lang: e.target.value })}
        /> */}
        <button onClick={this.handlesubmit}>Download</button>
        {/* {this.state.dataInCSV && (
          <a
            href={`data:text/csv;charset=utf-8,${escape(this.state.dataInCSV)}`}
            download="filename.csv"
          >
            download
          </a>
        )} */}
        {this.state.loading&&<div>please wait ...</div>}
      </div>
    );
  }
}

export default Data;
