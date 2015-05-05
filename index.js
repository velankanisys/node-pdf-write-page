// Generated by CoffeeScript 1.9.2
(function() {
  var hummus, merge;

  hummus = require('hummus');

  merge = require('merge');

  module.exports = function(opts) {
    var cfg, ctx, pageModifier, pdfWriter;
    pdfWriter = hummus.createWriterToModify(opts["in"], {
      modifiedFilePath: opts.out
    });
    pageModifier = new hummus.PDFPageModifier(pdfWriter, opts.pageNumber);
    ctx = pageModifier.startContext().getContext();
    cfg = {
      font: pdfWriter.getFontForFile(__dirname + "/SourceSansPro-Regular.ttf"),
      size: 14,
      colorspace: 'gray',
      color: 0x00
    };
    return {
      write: function(x, y, txt) {
        ctx.writeText(txt, x, y, cfg);
        return this;
      },
      end: function() {
        pageModifier.endContext().writePage();
        return pdfWriter.end();
      },
      cfg: function(cfgIn) {
        cfg = merge(cfg, cfgIn);
        if (cfg.fontPath) {
          cfg.font = pdfWriter.getFontForFile(cfg.fontPath);
          delete cfg.fontPath;
        }
        return this;
      },
      restoreCfg: function() {
        cfg = {
          font: pdfWriter.getFontForFile(__dirname + "/SourceSansPro-Regular.ttf"),
          size: 14,
          colorspace: 'gray',
          color: 0x00
        };
        return this;
      }
    };
  };

}).call(this);