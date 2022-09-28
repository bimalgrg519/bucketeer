import { Dialog } from '@headlessui/react';
import FileUploadIcon from '@material-ui/icons/CloudUpload';
import FilePresentIcon from '@material-ui/icons/FileCopyOutlined';
import { FC, memo, ChangeEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { messages } from '../../lang/messages';
import { classNames } from '../../utils/css';

export interface SegmentAddFormProps {
  onSubmit: () => void;
  onCancel: () => void;
}

export const SegmentAddForm: FC<SegmentAddFormProps> = memo(
  ({ onSubmit, onCancel }) => {
    const { formatMessage: f } = useIntl();
    const methods = useFormContext();
    const [selectedFile, setSelectedFile] = useState(null);
    const {
      register,
      trigger,
      formState: { errors, isSubmitted, isValid },
    } = methods;

    const onFileInput = (e: ChangeEvent<HTMLInputElement>): void => {
      if (e.target.files.length > 0) {
        setSelectedFile(e.target.files[0]);
      } else {
        setSelectedFile(null);
      }
      trigger('file');
    };

    return (
      <div className="w-[500px]">
        <form className="flex flex-col">
          <div className="flex-1 h-0">
            <div className="py-6 px-4 bg-primary">
              <div className="flex items-center justify-between">
                <Dialog.Title className="text-lg font-medium text-white">
                  {f(messages.segment.add.header.title)}
                </Dialog.Title>
              </div>
              <div className="mt-1">
                <p className="text-sm text-indigo-300">
                  {f(messages.segment.add.header.description)}
                </p>
              </div>
            </div>
            <div
              className="
                flex-1
                flex flex-col
                justify-between
              "
            >
              <div
                className="
                  space-y-6 px-5 pt-6 pb-5
                  flex flex-col
                "
              >
                <div className="">
                  <label htmlFor="name">
                    <span className="input-label">{f({ id: 'name' })}</span>
                  </label>
                  <div className="mt-1">
                    <input
                      {...register('name')}
                      type="text"
                      name="name"
                      id="name"
                      className="input-text w-full"
                      disabled={isSubmitted}
                    />
                    <p className="input-error">
                      {errors.name && (
                        <span role="alert">{errors.name.message}</span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="">
                  <label htmlFor="description" className="block">
                    <span className="input-label">
                      {f(messages.description)}
                    </span>
                    <span className="input-label-optional">
                      {' '}
                      {f(messages.input.optional)}
                    </span>
                  </label>
                  <div className="mt-1">
                    <textarea
                      {...register('description')}
                      id="description"
                      name="description"
                      rows={4}
                      className="input-text w-full"
                      disabled={isSubmitted}
                    />
                    <p className="input-error">
                      {errors.description && (
                        <span role="alert">{errors.description.message}</span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="">
                  <label htmlFor="file" className="block">
                    <span className="input-label">
                      {f(messages.segment.fileUpload.userList)}
                    </span>
                    <span className="input-label-optional">
                      {' '}
                      {f(messages.input.optional)}
                    </span>
                  </label>
                  <div className="mt-1">
                    <div className="mb-2">
                      <div
                        className={classNames(
                          'relative h-28 rounded-lg border-dashed',
                          'border-2 border-gray-300 bg-gray-100',
                          'flex justify-center items-center'
                        )}
                      >
                        <div className="absolute">
                          <div className="flex flex-col items-center ">
                            <div className="text-gray-500">
                              <FileUploadIcon />
                            </div>
                            <span className="block text-gray-500">
                              {f(messages.segment.fileUpload.browseFiles)}
                            </span>
                          </div>
                        </div>
                        <input
                          {...register('file')}
                          id="file"
                          name="file"
                          type="file"
                          className="input-file"
                          onInput={onFileInput}
                          accept=".csv,.txt"
                          disabled={isSubmitted}
                        />
                      </div>
                      <div className="flex text-gray-400 my-2">
                        {f(messages.segment.fileUpload.fileFormat)}
                      </div>
                    </div>
                    {selectedFile && (
                      <div
                        className={classNames(
                          'h-14 rounded-lg border-dashed',
                          'border-2 border-gray-300',
                          'flex'
                        )}
                      >
                        <div className="flex items-center ml-3">
                          <div className="text-gray-300">
                            <FilePresentIcon />
                          </div>
                          <div className="ml-3">
                            <p className="text-base text-sm text-gray-700 w-96 truncate ...">
                              {selectedFile.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {f(messages.segment.fileUpload.fileSize, {
                                fileSize: selectedFile.size.toLocaleString(),
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    <p className="input-error">
                      {errors.file && (
                        <span role="alert">{errors.file.message}</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 px-4 py-4 flex justify-end">
            <div className="mr-3">
              <button
                type="button"
                className="btn-cancel"
                disabled={isSubmitted}
                onClick={onCancel}
              >
                {f(messages.button.cancel)}
              </button>
            </div>
            <button
              type="button"
              className="btn-submit"
              disabled={isSubmitted || !isValid}
              onClick={onSubmit}
            >
              {f(messages.button.submit)}
            </button>
          </div>
        </form>
      </div>
    );
  }
);
